'use client';

import React, { useCallback, useEffect } from 'react';
import styles from '../../../app/feartofuel/styles/fear_to_fuel.module.css';
import { ArrowRight, MessageSquare } from 'lucide-react';

export default function Day2Main11({
  answers,
  onChange,
  onContinue,
  aiResponse,
  aiLoading,
  aiError,
}) {
  const mostPainfulFailureReflection = answers.mostPainfulFailureReflection || 'No reflection provided.';
  const whatWasAtStakeReflection = answers.whatWasAtStakeReflection || 'No reflection provided.';
  const copingMechanismsReflection = answers.copingMechanismsReflection || 'No reflection provided.';
  const handleNext = useCallback(() => onContinue(), [onContinue]);

  // Combine most painful failure inputs for AI analysis (like working examples)
  useEffect(() => {
    const combinedInput = `Most Painful Failure: ${mostPainfulFailureReflection}\n\nWhat Was at Stake: ${whatWasAtStakeReflection}\n\nCoping Mechanisms: ${copingMechanismsReflection}`;
    
    // Only trigger if we have all inputs and it's different from current combined value
    if (mostPainfulFailureReflection.trim() && whatWasAtStakeReflection.trim() && copingMechanismsReflection.trim() && combinedInput !== answers.combinedMostPainfulFailure) {
      onChange('combinedMostPainfulFailure', combinedInput);
    }
  }, [mostPainfulFailureReflection, whatWasAtStakeReflection, copingMechanismsReflection, answers.combinedMostPainfulFailure, onChange]);

  return (
    <div className={styles.mainContent}>
      <div className={styles.header}>
        <h1 className={styles.title}>Your Most Painful Experience</h1>
        <p className={styles.introduction}>
          Here's some insight on this deeply significant experience.
        </p>
      </div>

      <div className={styles.calloutBox} style={{ marginBottom: '20px' }}>
        <h3 className={styles.formLabelBold}>What Happened:</h3>
        <p className="whitespace-pre-wrap">{mostPainfulFailureReflection}</p>

        <h3 className={styles.formLabelBold} style={{ marginTop: '30px' }}>What Was at Stake:</h3>
        <p className="whitespace-pre-wrap">{whatWasAtStakeReflection}</p>

        <h3 className={styles.formLabelBold} style={{ marginTop: '30px' }}>How You Coped:</h3>
        <p className="whitespace-pre-wrap">{copingMechanismsReflection}</p>
      </div>

      {aiLoading && (
        <div className={styles.aiLoading}>
          <span>Coco is reflecting on your most painful experience</span>
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