'use client';

import React, { useCallback } from 'react';
import styles from '../../../app/feartofuel/styles/fear_to_fuel.module.css';
import { ArrowRight, MessageSquare, Sparkles } from 'lucide-react';

export default function Day2Main20({
  answers,
  onContinue,
  aiResponse,
  aiLoading,
  aiError,
}) {
  const handleNext = useCallback(() => onContinue(), [onContinue]);

  return (
    <div className={styles.mainContent}>
      <div className={styles.header}>
        <h1 className={styles.title}>Pattern Recognition</h1>
        <p className={styles.introductionMargin}>
          Let's look at the deeper patterns that emerge from your failure history.
        </p>
      </div>

      {aiLoading && (
        <div className={styles.aiLoading}>
          <Sparkles size={20} />
          <span>Coco is analyzing the patterns across all your experiences</span>
          <div className={styles.loadingDots}>
            <div className={styles.loadingDot}></div>
            <div className={styles.loadingDot}></div>
            <div className={styles.loadingDot}></div>
          </div>
        </div>
      )}

      {aiError && (
        <div className={styles.calloutBox} style={{ borderColor: '#EF4444', backgroundColor: '#FEE2E2' }}>
          <p style={{ color: '#DC2626' }}>Unable to generate analysis: {aiError}</p>
        </div>
      )}

      {!aiLoading && !aiError && aiResponse && (
        <div className={styles.aiAnalysisCard} style={{ margin: '0 0 2rem 0', padding: '2rem' }}>
          <div className={styles.aiHeader} style={{ marginBottom: '2rem' }}>
            <div className={styles.aiIconContainer} style={{ width: '56px', height: '56px' }}>
              <MessageSquare className={styles.aiIcon} style={{ width: '28px', height: '28px' }} />
            </div>
            <div className={styles.aiInfo}>
              <h2 className={styles.aiName} style={{ fontSize: '1.5rem' }}>Deep Pattern Analysis</h2>
              <p className={styles.aiRole}>From Coco, your guide</p>
            </div>
          </div>
          <div className={styles.aiMessage} style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
            <div className="whitespace-pre-wrap">{aiResponse}</div>
          </div>
        </div>
      )}

      {!aiLoading && (
        <div className={styles.actionButtons}>
          <button
            className={`${styles.primaryButton} ${styles.withIcon}`}
            onClick={handleNext}
            disabled={aiLoading}
          >
            Continue to Reflection <ArrowRight size={20} />
          </button>
        </div>
      )}
    </div>
  );
} 