'use client';

import React, { useCallback, useEffect } from 'react';
import styles from '../../../app/feartofuel/styles/fear_to_fuel.module.css';
import { ArrowRight, MessageSquare, Sparkles } from 'lucide-react';

export default function Day2Main26({
  answers,
  onChange,
  onContinue,
  aiResponse,
  aiLoading,
  aiError,
}) {
  const handleNext = useCallback(() => onContinue(), [onContinue]);

  // Aggregate the 3 lessons learned inputs to trigger positive reframing analysis
  useEffect(() => {
    const lessonsLearned = [
      answers.lessonsFromFirstMemory,
      answers.lessonsFromMostPainfulMemory,
      answers.lessonsFromMostRecentMemory,
    ].filter(Boolean).join('\n\n---\n\n');

    // Only trigger if we have substantial content and it's different from current trigger
    if (lessonsLearned.length > 50 && lessonsLearned !== answers.lessonsReframingAnalysis) {
      onChange('lessonsReframingAnalysis', lessonsLearned);
    }
  }, [
    answers.lessonsFromFirstMemory,
    answers.lessonsFromMostPainfulMemory,
    answers.lessonsFromMostRecentMemory,
    answers.lessonsReframingAnalysis,
    onChange,
  ]);

  return (
    <div className={styles.mainContent}>
      {!aiLoading && (
        <div className={styles.header}>
          <h1 className={styles.title}>Wisdom Integration</h1>
          <p className={styles.introductionMargin}>
            Let's celebrate the incredible wisdom you've discovered from transforming your experiences.
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
          <h2 className={styles.title}>Integrating Your Wisdom</h2>
          <p className={styles.introduction}>
            Coco is weaving together all the wisdom you've discovered to create a powerful foundation for your future.
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
              <Sparkles className={styles.aiIcon} />
            </div>
            <div className={styles.aiInfo}>
              <h2 className={styles.aiName}>Your Wisdom Foundation</h2>
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
            Continue to Reflection <ArrowRight size={20} />
          </button>
        </div>
      )}
    </div>
  );
} 