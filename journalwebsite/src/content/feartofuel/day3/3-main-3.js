'use client';

import React, { useState, useEffect } from 'react';
import { ArrowRight, MessageSquare, HelpCircle } from 'lucide-react';
import styles from '../../../app/feartofuel/styles/fear_to_fuel.module.css';

// Component for guided reflection on Day 3 - Key Moments: First Career Setback
export default function Day3Main3({
  answers,
  onChange,
  onContinue,
  aiResponse,
  aiLoading,
  aiError
}) {
  const [showPrompts, setShowPrompts] = useState(false);
  const [showAIResponse, setShowAIResponse] = useState(false);

  // Local buffer for user inputs, separate from committed answers
  const [localStory, setLocalStory] = useState(
    answers?.day3CareerFailureStory || ''
  );
  const [localAge, setLocalAge] = useState(
    answers?.day3CareerFailureAge || ''
  );

  // Show existing AI response on mount or when aiResponse changes
  useEffect(() => {
    if (aiResponse) {
      setShowAIResponse(true);
    }
  }, [aiResponse]);

  // Sync local buffers if external answers prop resets (but only before first AI shows)
  useEffect(() => {
    if (
      answers?.day3CareerFailureStory !== undefined &&
      !showAIResponse
    ) {
      setLocalStory(answers.day3CareerFailureStory);
    }
  }, [answers?.day3CareerFailureStory, showAIResponse]);

  useEffect(() => {
    if (
      answers?.day3CareerFailureAge !== undefined &&
      !showAIResponse
    ) {
      setLocalAge(answers.day3CareerFailureAge);
    }
  }, [answers?.day3CareerFailureAge, showAIResponse]);

  // Track whether user has unsaved edits
  const committedStory = answers?.day3CareerFailureStory || '';
  const committedAge = answers?.day3CareerFailureAge || '';
  const hasUnsavedChanges = localStory !== committedStory || localAge !== committedAge;

  const isUpdate = Boolean(aiResponse);
  const buttonLabel = isUpdate ? "Update Coco's Insight" : "Get Coco's Insight";

  const handleGetInsight = () => {
    if (!localStory.trim() || !localAge.trim() || aiLoading) return;
    // Commit the final inputs and trigger AI
    onChange('day3CareerFailureStory', localStory);
    onChange('day3CareerFailureAge', localAge);
    setShowAIResponse(true);
  };

  const handleContinue = () => {
    onContinue();
  };

  return (
    <div className={styles.mainContent}>
      <div className={styles.header}>
        <h1 className={styles.title}>Key Moments</h1>
        <p className={styles.introductionMargin}>
          Remember 3 significant moments when you faced failure focused in your career.
        </p>
      </div>

      <div className={styles.reflectionSection}>
        <h2 className={styles.subTitle}>Your First Career Setback</h2>
        
        <div>
          <label htmlFor="careerFailure" className={styles.formLabel}>
            What happened?
          </label>
          <textarea
            id="careerFailure"
            className={styles.textInput}
            style={{
              marginBottom: (showAIResponse && !hasUnsavedChanges) ? '0px' : '24px'
            }}
            value={localStory}
            onChange={e => setLocalStory(e.target.value)}
            placeholder="Think of your first significant career failure - the one that really shook your confidence."
            rows={6}
            disabled={aiLoading}
          />
        </div>

        <div>
          <label htmlFor="careerFailureAge" className={styles.formLabel}>
            How old were you?
          </label>
          <input
            id="careerFailureAge"
            type="number"
            className={styles.numberInput}
            value={localAge}
            onChange={e => setLocalAge(e.target.value)}
            placeholder="Age"
            min="1"
            max="100"
            disabled={aiLoading}
          />
        </div>
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
              <h3 className={styles.promptsTitle}>Think about:</h3>
              <p>
                What was the situation or project?<br/>
                What went wrong and how did it feel?<br/>
                How did others react to your failure?<br/>
                What did you tell yourself about what happened?<br/><br/>
                Focus on the failure that had the biggest impact on your confidence.
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
            disabled={!localStory.trim() || !localAge.trim()}
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