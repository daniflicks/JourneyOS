'use client';

import React, { useCallback } from 'react';
import styles from '../../../app/feartofuel/styles/fear_to_fuel.module.css';
import { ArrowRight, MessageSquare } from 'lucide-react';

export default function Day2Main14({
  answers,
  onContinue,
  aiResponse,
  aiLoading,
  aiError,
}) {
  const whatWasAtStakeReflection = answers.whatWasAtStakeReflection || '';
  const handleNext = useCallback(() => onContinue(), [onContinue]);

  return (
    <div className={styles.mainContent}>
   

      <div className={styles.calloutBox}>
        <p className="whitespace-pre-wrap">
          {whatWasAtStakeReflection || 'No reflection provided.'}
        </p>
      </div>

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
          Continue to Next Question <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
} 