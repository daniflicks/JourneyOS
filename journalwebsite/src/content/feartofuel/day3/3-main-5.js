'use client';

import React, { useCallback, useEffect } from 'react';
import styles from '../../../app/feartofuel/styles/fear_to_fuel.module.css';
import { ArrowRight, Search, Sparkles } from 'lucide-react';

export default function Day3Main5({
  answers,
  onChange,
  onContinue,
  aiResponse,
  aiLoading,
  aiError,
}) {
  const handleNext = useCallback(() => onContinue(), [onContinue]);

  // Aggregate the 3 catastrophizing inputs to trigger magnification analysis
  useEffect(() => {
    const catastrophizingAnalysis = [
      `What Actually Happened:\n${answers.actualHappened || ''}`,
      `How Mind Tells Story:\n${answers.mindStoryReflection || ''}`,
      `Future Catastrophe:\n${answers.futureCatastropheReflection || ''}`,
    ].filter(section => section.length > 25).join('\n\n---\n\n');

    // Only trigger if we have substantial content and it's different from current trigger
    if (catastrophizingAnalysis.length > 75 && catastrophizingAnalysis !== answers.catastrophizingPatternAnalysis) {
      onChange('catastrophizingPatternAnalysis', catastrophizingAnalysis);
    }
  }, [
    answers.actualHappened,
    answers.mindStoryReflection,
    answers.futureCatastropheReflection,
    answers.catastrophizingPatternAnalysis,
    onChange,
  ]);

  return (
    <div className={styles.mainContent}>
      {!aiLoading && (
        <div className={styles.header}>
          <h1 className={styles.title}>Spot the Magnification</h1>
          <p className={styles.introductionMargin}>
            Look at what you wrote. Let's identify the catastrophizing patterns your mind created.
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
          <h2 className={styles.title}>Analyzing Your Patterns</h2>
          <p className={styles.introduction}>
            Coco is examining your responses to identify how your mind magnifies experiences.
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
              <Search className={styles.aiIcon} />
            </div>
            <div className={styles.aiInfo}>
              <h2 className={styles.aiName}>Magnification Analysis</h2>
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