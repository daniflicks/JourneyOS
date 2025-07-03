'use client';

import React, { useCallback, useEffect } from 'react';
import styles from '../../../app/feartofuel/styles/fear_to_fuel.module.css';
import { ArrowRight, MessageSquare } from 'lucide-react';
import { useJourneyStore } from '../../../store/journeyStore';

export default function Day4Main5({ answers, onChange, onContinue, aiResponse, aiLoading, aiError }) {
  // 1️⃣ Aggregate data from the three fears + prior-day memory to feed Coco
  const userMemory = useJourneyStore((s) => s.userMemory);

  useEffect(() => {
    const {
      fear1            = '',
      fearProtects     = '',
      careAbout        = '',
      fear2            = '',
      fearProtects2    = '',
      careAbout2       = '',
      fear3            = '',
      fearProtects3    = '',
      careAbout3       = '',
    } = answers;

    // Build one text block for the AI prompt
    const payload = [
      `Fear 1: ${fear1} - Protects: ${fearProtects} - Cares about: ${careAbout}`.trim(),
      `Fear 2: ${fear2} - Protects: ${fearProtects2} - Cares about: ${careAbout2}`.trim(),
      `Fear 3: ${fear3} - Protects: ${fearProtects3} - Cares about: ${careAbout3}`.trim(),
      userMemory ? `Prior insights:\n${userMemory}` : '',
    ].filter(Boolean).join('\n\n');

    // Save into store so the wrapper hook can send it to AI
    if (payload && payload !== answers.hiddenPatternTrigger) {
      onChange('hiddenPatternTrigger', payload);
    }
  }, [answers, onChange, userMemory]);

  // Navigation handler
  const handleNext = useCallback(() => onContinue(), [onContinue]);

  // ─── UI STATES ──────────────────────────────────────────────────────────────
  const hasContent   = aiResponse && aiResponse.trim().length > 0;
  const isProcessing = aiLoading || (!aiError && !hasContent);

  if (isProcessing) {
    return (
      <div className={styles.mainContent}>
        <div className={styles.flowerContainer}>
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className={styles.petal} style={{ '--rotation': `${i * 45}deg` }}></div>
          ))}
        </div>
        <h2 className={styles.title}>Detecting Hidden Pattern…</h2>
        <p className={styles.introduction}>Coco is connecting the dots across all your fears and previous insights.</p>
      </div>
    );
  }

  if (aiError) {
    return (
      <div className={styles.mainContent}>
        <p className="text-red-500 mt-4">Unable to generate insight: {aiError}</p>
      </div>
    );
  }

  return (
    <div className={styles.mainContent}>
      {!aiLoading && (
        <div className={styles.header}>
          <h1 className={styles.title}>The Hidden Pattern</h1>
          <p className={styles.introductionMargin}>
            Discover the deeper theme uniting your fears — turning vulnerability into power.
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
              <h2 className={styles.aiName}>Pattern Insight</h2>
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