'use client';

import React, { useState, useEffect } from 'react';
import { ArrowRight, MessageSquare, HelpCircle } from 'lucide-react';
import styles from '../../../app/feartofuel/styles/fear_to_fuel.module.css';

// Component for guided reflection on Day 3 - Part 2: Adult Models
export default function Day3Main2({
  answers,
  onChange,
  onContinue,
  aiResponse,
  aiLoading,
  aiError
}) {
  const [showPrompts, setShowPrompts] = useState(false);
  const [showAIResponse, setShowAIResponse] = useState(false);

  // Local buffer for user input, separate from committed answer
  const [localReflection, setLocalReflection] = useState(
    answers?.day3AdultFailureReflection || ''
  );

  // Show existing AI response on mount or when aiResponse changes
  useEffect(() => {
    if (aiResponse) {
      setShowAIResponse(true);
    }
  }, [aiResponse]);

  // Sync local buffer if external answers prop resets (but only before first AI shows)
  useEffect(() => {
    if (
      answers?.day3AdultFailureReflection !== undefined &&
      !showAIResponse
    ) {
      setLocalReflection(answers.day3AdultFailureReflection);
    }
  }, [answers?.day3AdultFailureReflection, showAIResponse]);

  // Track whether user has unsaved edits
  const committed = answers?.day3AdultFailureReflection || '';
  const hasUnsavedChanges = localReflection !== committed;

  const isUpdate = Boolean(aiResponse);
  const buttonLabel = isUpdate ? "Update Coco's Insight" : "Get Coco's Insight";

  const handleGetInsight = () => {
    if (!localReflection.trim() || aiLoading) return;
    // Commit the final reflection and trigger AI
    onChange('day3AdultFailureReflection', localReflection);
    setShowAIResponse(true);
  };

  const handleContinue = () => {
    onContinue();
  };

  return (
    <div className={styles.mainContent}>
      <div className={styles.reflectionSection}>
        <h2 className={styles.subTitle}>Part 2: Adult Models</h2>

        <div>
          <label htmlFor="adultFailure" className={styles.formLabel}>
            How did the adults around you (parents, family) deal with their own failures or mistakes?
          </label>

          <textarea
            id="adultFailure"
            className={styles.textInput}
            style={{
              marginBottom: (showAIResponse && !hasUnsavedChanges) ? '0px' : '24px'
            }}
            value={localReflection}
            onChange={e => setLocalReflection(e.target.value)}
            placeholder="Reflect on how the adults in your life handled their own setbacks..."
            rows={6}
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
                Did they talk about their mistakes openly?<br/>
                Did they bounce back quickly or struggle longer?<br/>
                Did they ask for help or handle things alone?<br/><br/>
                Take your time and write whatever observations come to mind.
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
