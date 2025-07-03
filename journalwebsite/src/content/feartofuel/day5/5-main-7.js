'use client';

import React, { useEffect, useCallback } from 'react';
import styles from '../../../app/feartofuel/styles/fear_to_fuel.module.css';
import { ArrowRight, MessageSquare } from 'lucide-react';

export default function Day5Main7({ answers, onChange, onContinue, aiResponse, aiLoading, aiError }) {
  // Build payload once based on prior inputs
  useEffect(() => {
    const belief    = answers.selectedBelief || '';
    const triggers  = answers.beliefTriggerSituations || '';
    const costs     = answers.beliefCostReflection || '';
    const protects  = answers.beliefPayoffReflection || '';

    const payload = [
      `User's belief: ${belief}`.trim(),
      `When it shows up: ${triggers}`.trim(),
      `What it costs: ${costs}`.trim(),
      `What it protects from: ${protects}`.trim(),
    ].join('\n');

    if (payload && payload !== answers.reframeTrigger) {
      onChange('reframeTrigger', payload);
    }
  }, [answers, onChange]);

  const handleNext = useCallback(() => onContinue(), [onContinue]);

  // UI states
  const hasContent = aiResponse && aiResponse.trim().length > 0;
  const isProcessing = aiLoading || (!aiError && !hasContent);

  if (isProcessing) {
    return (
      <div className={styles.mainContent}>
        <div className={styles.flowerContainer}>
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className={styles.petal} style={{ '--rotation': `${i * 45}deg` }}></div>
          ))}
        </div>
        <h2 className={styles.title}>Creating Your Reframe…</h2>
        <p className={styles.introduction}>Coco is crafting a gentler, empowering perspective on your belief.</p>
      </div>
    );
  }

  if (aiError) {
    return (
      <div className={styles.mainContent}>
        <p className="text-red-500 mt-4">Unable to generate reframe: {aiError}</p>
      </div>
    );
  }

  return (
    <div className={styles.mainContent}>
      {!aiLoading && (
        <div className={styles.header}>
          <h1 className={styles.title}>Your New Perspective</h1>
          <p className={styles.introductionMargin}>
            See how you might keep yourself safe while still moving forward.
          </p>
        </div>
      )}

      {!aiLoading && hasContent && (
        <div className={styles.aiAnalysisCard}>
          <div className={styles.aiHeader}>
            <div className={styles.aiIconContainer}>
              <MessageSquare className={styles.aiIcon} />
            </div>
            <div className={styles.aiInfo}>
              <h2 className={styles.aiName}>Balanced Reframe</h2>
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
          >
            Continue <ArrowRight size={20} />
          </button>
        </div>
      )}
    </div>
  );
} 