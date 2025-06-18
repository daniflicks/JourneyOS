'use client';

import React, { useState, useEffect } from 'react';
import { ArrowRight, MessageSquare, HelpCircle } from 'lucide-react';
import styles from '../../../app/feartofuel/styles/fear_to_fuel.module.css';
import { SECTION_TYPES } from '../../../constants/journeyConstants';

// Component for guided reflection on Day 3 - Finding the Lessons
export default function Day3Main12({
  answers,
  onChange,
  onContinue,
  aiResponse,
  aiLoading,
  aiError
}) {
  const [showPrompts, setShowPrompts] = useState(false);
  const [showAIResponse, setShowAIResponse] = useState(false);
  const [careerSummary, setCareerSummary] = useState('');

  // Local buffer for user input, separate from committed answer
  const [localReflection, setLocalReflection] = useState(
    answers?.day3LessonsFromFirstMemory || ''
  );

  // Get preloaded career summary from Day 3 career failure (3-main-3)
  useEffect(() => {
    const careerFailureStory = answers?.day3CareerFailureStory || '';
    if (careerFailureStory) {
      const cacheKey = `claude-3-${SECTION_TYPES.MAIN_EXERCISE}-11-${encodeURIComponent(careerFailureStory)}`;
      const cached = localStorage.getItem(cacheKey);
      if (cached) setCareerSummary(cached);
    }
  }, [answers?.day3CareerFailureStory]);

  // Show existing AI response on mount or when aiResponse changes
  useEffect(() => {
    if (aiResponse) {
      setShowAIResponse(true);
    }
  }, [aiResponse]);

  // Sync local buffer if external answers prop resets (but only before first AI shows)
  useEffect(() => {
    if (
      answers?.day3LessonsFromFirstMemory !== undefined &&
      !showAIResponse
    ) {
      setLocalReflection(answers.day3LessonsFromFirstMemory);
    }
  }, [answers?.day3LessonsFromFirstMemory, showAIResponse]);

  // Track whether user has unsaved edits
  const committed = answers?.day3LessonsFromFirstMemory || '';
  const hasUnsavedChanges = localReflection !== committed;

  const isUpdate = Boolean(aiResponse);
  const buttonLabel = isUpdate ? "Update Coco's Insight" : "Get Coco's Insight";

  const handleGetInsight = () => {
    if (!localReflection.trim() || aiLoading) return;
    // Commit the final reflection and trigger AI
    onChange('day3LessonsFromFirstMemory', localReflection);
    setShowAIResponse(true);
  };

  const handleContinue = () => {
    onContinue();
  };

  return (
    <div className={styles.mainContent}>
      <div className={styles.header}>
        <h1 className={styles.title}>Finding the Lessons</h1>
        <p className={styles.introductionMargin}>
          Now let's look at these experiences through a different lens <br/> by taking each memory and finding the strength and wisdom you gained.
        </p>
      </div>

      <div className={styles.formSection}>
        <label htmlFor="lessonsLearned" className={styles.formLabel}>
          Starting with your {careerSummary || 'career experience'}, what did this experience actually teach you?
        </label>
        
        <textarea
          id="lessonsLearned"
          className={styles.textInput}
          style={{
            marginBottom: (showAIResponse && !hasUnsavedChanges) ? '0px' : '24px'
          }}
          value={localReflection}
          onChange={e => setLocalReflection(e.target.value)}
          placeholder="Think about the strength, resilience, or wisdom you gained from this experience. What did it teach you about yourself, others, or life?"
          rows={6}
          disabled={aiLoading}
        />
      </div>

      {/* Prompt button & callout: only when no AI shown yet, or when editing */}
      {(!showAIResponse || hasUnsavedChanges) && (
        <>
          <div className={styles.helperButtons}>
            <button
              type="button"
              className={styles.textButton}
              onClick={() => setShowPrompts(prev => !prev)}
            >
              <HelpCircle size={16} /> Need a prompt?
            </button>
          </div>

          {showPrompts && (
            <div className={styles.calloutBox} style={{ marginBottom: '20px' }}>
              <h3 className={styles.promptsTitle}>Think beyond just "I'm not as good as I thought." What practical skills, awareness, or resilience did you develop from this? For example:</h3>
              <p>
                How to handle difficult client feedback<br/>
                The importance of setting clear expectations<br/>
                That you could survive professional disappointment
              </p>
            </div>
          )}
        </>
      )}

      {/* Primary button: only when not loading, and either before AI or after unsaved edits */}
      {!aiLoading && (!showAIResponse || hasUnsavedChanges) && (
        <div className={styles.actionButtons}>
          <button
            type="button"
            onClick={handleGetInsight}
            disabled={!localReflection.trim()}
            className={`${styles.primaryButton} ${styles.withIcon}`}
          >
            {buttonLabel} <ArrowRight size={20} />
          </button>
        </div>
      )}

      {/* AI Response Section */}
      {showAIResponse && (
       <div id="ai-response" style={{ marginTop: (!showAIResponse || hasUnsavedChanges) ? '40px' : '20px' }}>
          {aiLoading && (
            <div className={styles.aiLoading}>
              <span>Coco is reflecting on your response</span>
              <div className={styles.loadingDots}>
                <div className={styles.loadingDot}></div>
                <div className={styles.loadingDot}></div>
                <div className={styles.loadingDot}></div>
              </div>
            </div>
          )}

          {aiError && <p className="text-red-500 mt-4">{aiError}</p>}

          {!aiLoading && !aiError && aiResponse && (
            <>
              <div className={styles.calloutBox} style={{
              marginBottom: '24px'}}>
                <p className="whitespace-pre-wrap">{aiResponse}</p>
              </div>

              <div className={styles.actionButtons}>
                <button
                  type="button"
                  onClick={handleContinue}
                  className={`${hasUnsavedChanges ? styles.secondaryButton : styles.primaryButton} ${styles.withIcon}`}
                >
                  Continue to Next Question <ArrowRight size={20} />
                </button>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
} 