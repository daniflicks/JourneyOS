'use client';

import React, { useCallback, useEffect } from 'react';
import styles from '../../../app/feartofuel/styles/fear_to_fuel.module.css';
import { ArrowRight, Heart, MessageSquare } from 'lucide-react';

export default function Day3Main7({
  answers,
  onChange,
  onContinue,
  aiResponse,
  aiLoading,
  aiError,
}) {
  const handleNext = useCallback(() => onContinue(), [onContinue]);

  // Trigger AI analysis when component mounts or when needed
  useEffect(() => {
    // We'll use a simple trigger to request the reframing analysis
    // The AI will pull from Day 1 patterns stored in the user's data
    if (!answers.fearReframingTrigger) {
      onChange('fearReframingTrigger', 'analyze_day1_patterns');
    }
  }, [answers.fearReframingTrigger, onChange]);

  return (
    <div className={styles.mainContent}>
      {!aiLoading && (
        <div className={styles.header}>
          <h1 className={styles.title}>Reality Check</h1>
          <p className={styles.introductionMargin}>
            Let's revisit your Day 1 patterns with your new survival perspective.
          </p>
        </div>
      )}

      {aiLoading && (
        <div className={styles.mainContent}>
          <div className={styles.flowerContainer}>
            <div className={styles.petal} style={{ '--rotation': '0deg' }}></div>
            <div className={styles.petal} style={{ '--rotation': '45deg' }}></div>
            <div className={styles.petal} style={{ '--rotation': '90deg' }}></div>
            <div className={styles.petal} style={{ '--rotation': '135deg' }}></div>
            <div className={styles.petal} style={{ '--rotation': '180deg' }}></div>
            <div className={styles.petal} style={{ '--rotation': '225deg' }}></div>
            <div className={styles.petal} style={{ '--rotation': '270deg' }}></div>
            <div className={styles.petal} style={{ '--rotation': '315deg' }}></div>
          </div>
          <h2 className={styles.title}>Connecting the Dots</h2>
          <p className={styles.introduction}>
            Coco is reviewing your Day 1 patterns and connecting them to your survival insights.
          </p>
        </div>
      )}

      {aiError && (
        <div className={styles.calloutBox} style={{ borderColor: '#EF4444', backgroundColor: '#FEE2E2' }}>
          <p style={{ color: '#DC2626' }}>Unable to generate analysis: {aiError}</p>
        </div>
      )}

      {!aiLoading && !aiError && aiResponse && (
        <div className={styles.aiAnalysisCard}>
          <div className={styles.aiHeader}>
            <div className={styles.aiIconContainer}>
              <Heart className={styles.aiIcon} />
            </div>
            <div className={styles.aiInfo}>
              <h2 className={styles.aiName}>Fear Reframing</h2>
              <p className={styles.aiRole}>From Coco, your guide</p>
            </div>
          </div>
          <div className={styles.aiMessage}>
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
            Continue <ArrowRight size={20} />
          </button>
        </div>
      )}
    </div>
  );
} 