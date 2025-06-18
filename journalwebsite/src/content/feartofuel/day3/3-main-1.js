'use client';

import React, { useState, useEffect } from 'react';
import { ArrowRight, MessageSquare, HelpCircle } from 'lucide-react';
import styles from '../../../app/feartofuel/styles/fear_to_fuel.module.css';

// Component for guided reflection on Day 3
export default function Day3Main1({
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
    answers?.day3EarlyMessagesReflection || ''
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
      answers?.day3EarlyMessagesReflection !== undefined &&
      !showAIResponse
    ) {
      setLocalReflection(answers.day3EarlyMessagesReflection);
    }
  }, [answers?.day3EarlyMessagesReflection, showAIResponse]);

  // Track whether user has unsaved edits
  const committed = answers?.day3EarlyMessagesReflection || '';
  const hasUnsavedChanges = localReflection !== committed;

  const isUpdate = Boolean(aiResponse);
  const buttonLabel = isUpdate ? "Update Coco's Insight" : "Get Coco's Insight";

  const handleGetInsight = () => {
    if (!localReflection.trim() || aiLoading) return;
    // Commit the final reflection and trigger AI
    onChange('day3EarlyMessagesReflection', localReflection);
    setShowAIResponse(true);
  };

  const handleContinue = () => {
    onContinue();
  };

  return (
    <div className={styles.mainContent}>
      <div className={styles.header}>
        <h1 className={styles.title}>Guided Reflection</h1>
        <p className={styles.introductionMargin}>
          Find a quiet space. Take three deep breaths.
        </p>
      </div>

      <div className={styles.reflectionSection}>
        <h2 className={styles.subTitle}>Part 1: Early Messages</h2>

        <div>
          <label htmlFor="earlyMessages" className={styles.formLabel}>
            Think back to your earliest memories about failure:<br />
            What did you learn about failure as a child?
          </label>

          <textarea
            id="earlyMessages"
            className={styles.textInput}
            style={{
              marginBottom: (showAIResponse && !hasUnsavedChanges) ? '0px' : '24px'
            }}
            value={localReflection}
            onChange={e => setLocalReflection(e.target.value)}
            placeholder="Take your time to reflect on your earliest memories..."
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
                Was it okay to mess up in your house?<br />
                Did adults get angry or disappointed when you failed?<br />
                Was failure shameful or a learning moment?<br />
                How did adults handle failure?<br /><br />
                Just write whatever comes to mind. No perfect answers needed.
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
