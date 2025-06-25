'use client';

import React, { useCallback, useEffect } from 'react';
import styles from '../../../app/feartofuel/styles/fear_to_fuel.module.css';
import { ArrowRight, MessageSquare, Sparkles } from 'lucide-react';

export default function Day2Main14({
  answers,
  onChange,
  onContinue,
  aiResponse,
  aiLoading,
  aiError,
}) {
  const handleNext = useCallback(() => onContinue(), [onContinue]);

  // Aggregate all Day 2 answers to trigger comprehensive analysis
  useEffect(() => {
    const day2Answers = [
      answers.earlyMessagesReflection,
      answers.adultFailureReflection,
      answers.careerFailureStory,
      answers.othersReactionReflection,
      answers.selfDecisionReflection,
      answers.mostPainfulFailureReflection,
      answers.whatWasAtStakeReflection,
      answers.copingMechanismsReflection,
      answers.mostRecentFailureReflection,
    ].filter(Boolean).join('\n\n---\n\n');

    // Only trigger if we have substantial content and it's different from current trigger
    if (day2Answers.length > 50 && day2Answers !== answers.triggerAnalysis) {
      onChange('triggerAnalysis', day2Answers);
    }
  }, [
    answers.earlyMessagesReflection,
    answers.adultFailureReflection,
    answers.careerFailureStory,
    answers.othersReactionReflection,
    answers.selfDecisionReflection,
    answers.mostPainfulFailureReflection,
    answers.whatWasAtStakeReflection,
    answers.copingMechanismsReflection,
    answers.mostRecentFailureReflection,
    answers.triggerAnalysis,
    onChange,
  ]);

  return (
    <div className={styles.mainContent}>
      {!aiLoading && (
        <div className={styles.header}>
          <h1 className={styles.title}>Pattern Recognition</h1>
          <p className={styles.introductionMargin}>
            Let's look at the deeper patterns that emerge from your failure history.
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
          <h2 className={styles.title}>Analyzing Patterns</h2>
          <p className={styles.introduction}>
            Coco is analyzing the patterns across all your experiences to provide deep insights.
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
              <MessageSquare className={styles.aiIcon} />
            </div>
            <div className={styles.aiInfo}>
              <h2 className={styles.aiName}>Deep Pattern Analysis</h2>
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