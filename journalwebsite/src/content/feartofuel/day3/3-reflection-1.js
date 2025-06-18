'use client';

import React, { useState, useCallback, useEffect } from 'react';
import styles from '../../../app/feartofuel/styles/fear_to_fuel.module.css';
import { ArrowRight, MessageSquare } from 'lucide-react';

export default function Day3Reflection1({ 
  answers, 
  onChange, 
  onContinue,
  aiResponse,
  aiLoading,
  aiError 
}) {
  const [showAIResponse, setShowAIResponse] = useState(false);
  
  // Local buffer for user input, separate from committed answer
  const [localReflection, setLocalReflection] = useState(
    answers?.day3ReflectionResponse || ''
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
      answers?.day3ReflectionResponse !== undefined &&
      !showAIResponse
    ) {
      setLocalReflection(answers.day3ReflectionResponse);
    }
  }, [answers?.day3ReflectionResponse, showAIResponse]);

  // Track whether user has unsaved edits
  const committed = answers?.day3ReflectionResponse || '';
  const hasUnsavedChanges = localReflection !== committed;

  const isUpdate = Boolean(aiResponse);
  const buttonLabel = isUpdate ? "Update Coco's Insight" : "Get Coco's Insight";

  const handleGetInsight = useCallback(() => {
    if (!localReflection.trim() || aiLoading) return;
    // Commit the final reflection and trigger AI
    onChange('day3ReflectionResponse', localReflection);
    setShowAIResponse(true);
  }, [localReflection, aiLoading, onChange]);

  const handleContinue = useCallback(() => {
    onContinue();
  }, [onContinue]);

  return (
    <div className={styles.mainContent}>
      <div className={styles.header}>
        <h1 className={styles.title}>Reflection</h1>
        <p className={styles.introductionMargin}>
          Take a moment to reflect on your experience with the main exercise.
        </p>
      </div>

      <div>
        <h2 className={styles.formLabel}>What's one new way you could think about your failures?</h2>
        <textarea
          className={styles.textInput}
          style={{
            marginBottom: (showAIResponse && !hasUnsavedChanges) ? '0px' : '24px'
          }}
          placeholder="Write your reflection here..."
          rows={6}
          value={localReflection}
          onChange={(e) => setLocalReflection(e.target.value)}
          disabled={aiLoading}
        />
      </div>

      {/* Primary button: only when not loading, and either before AI or after unsaved edits */}
      {!aiLoading && (!showAIResponse || hasUnsavedChanges) && (
        <div className={styles.actionButtons}>
          <button
            className={`${styles.primaryButton} ${styles.withIcon}`}
            onClick={handleGetInsight}
            disabled={!localReflection.trim()}
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
                marginBottom: '24px'
              }}>
                <p className="whitespace-pre-wrap">{aiResponse}</p>
              </div>

              <div className={styles.actionButtons}>
                <button
                  className={`${hasUnsavedChanges ? styles.secondaryButton : styles.primaryButton} ${styles.withIcon}`}
                  onClick={handleContinue}
                  disabled={aiLoading}
                >
                  Continue to Complete Day 3 <ArrowRight size={20} />
                </button>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
} 