'use client';

import React, { useCallback, useEffect } from 'react';
import styles from '../../../app/feartofuel/styles/fear_to_fuel.module.css';
import { ArrowRight, MessageSquare } from 'lucide-react';

export default function Day2Main3({
  answers,
  onChange,
  onContinue,
  aiResponse,
  aiLoading,
  aiError,
}) {
  const earlyMessagesReflection = answers.earlyMessagesReflection || 'No reflection provided.';
  const adultFailureReflection = answers.adultFailureReflection || 'No reflection provided.';
  const handleNext = useCallback(() => onContinue(), [onContinue]);

  // Combine early messages and adult failure reflections for AI analysis (like working examples)
  useEffect(() => {
    const combinedInput = `Early Messages: ${earlyMessagesReflection}\n\nAdult Models: ${adultFailureReflection}`;
    
    // Only trigger if we have both inputs and it's different from current combined value
    if (earlyMessagesReflection.trim() && adultFailureReflection.trim() && combinedInput !== answers.combinedEarlyMessages) {
      onChange('combinedEarlyMessages', combinedInput);
    }
  }, [earlyMessagesReflection, adultFailureReflection, answers.combinedEarlyMessages, onChange]);

  return (
    <div className={styles.mainContent}>
      <div className={styles.header}>
        <h1 className={styles.title}>Your Early Patterns</h1>
        <p className={styles.introduction}>
          Here's some insight on your early relationship with failure.
        </p>
      </div>

      <div className={styles.calloutBox} style={{ marginBottom: '20px' }}>
        <h3 className={styles.formLabelBold}>Early Messages About Failure:</h3>
        <p className="whitespace-pre-wrap">{earlyMessagesReflection}</p>

        <h3 className={styles.formLabelBold} style={{ marginTop: '30px' }}>How Adults Handled Failure:</h3>
        <p className="whitespace-pre-wrap">{adultFailureReflection}</p>
      </div>

      {aiLoading && (
        <div className={styles.aiLoading}>
          <span>Coco is reflecting on your responses</span>
          <div className={styles.loadingDots}>
            <div className={styles.loadingDot}></div>
            <div className={styles.loadingDot}></div>
            <div className={styles.loadingDot}></div>
          </div>
        </div>
      )}
      {aiError && (
        <p className="text-red-500 mt-4">{aiError}</p>
      )}
      {!aiLoading && !aiError && aiResponse && (
        <div className={styles.aiAnalysisCard}>
          <div className={styles.aiHeader}>
            <div className={styles.aiIconContainer}>
              <MessageSquare className={styles.aiIcon} />
            </div>
            <div className={styles.aiInfo}>
              <h2 className={styles.aiName}>From Coco, your guide</h2>
              <p className={styles.aiRole}>AI support companion</p>
            </div>
          </div>
          <div className={styles.aiMessage}>
            <p className="whitespace-pre-wrap">{aiResponse}</p>
          </div>
        </div>
      )}

      <div className={styles.actionButtons}>
        <button
          className={`${styles.primaryButton} ${styles.withIcon}`}
          onClick={handleNext}
          disabled={aiLoading}
        >
          Continue to Next Section <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
}
