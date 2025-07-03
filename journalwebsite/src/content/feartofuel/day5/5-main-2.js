'use client';

import React, { useMemo, useState, useCallback } from 'react';
import styles from '../../../app/feartofuel/styles/fear_to_fuel.module.css';
import { ArrowRight } from 'lucide-react';

export default function Day5Main2({ answers, onChange, onContinue, aiResponse, aiLoading, aiError }) {
  // Extract only the first-level numbered beliefs (e.g. "1. …")
  const beliefLines = useMemo(() => {
    if (!aiResponse) return [];
    return aiResponse
      .split(/\r?\n/)
      .filter((line) => /^\d+\.\s*/.test(line)) // keep "1. …" lines
      .slice(0, 3) // just the first three
      .map((line) =>
        line
          .replace(/^\d+\.\s*/, '') // strip list index
          .replace(/[\"“”]/g, '')      // strip straight or curly quotes
          .trim()
      );
  }, [aiResponse]);

  // Persist selected belief
  const [selected, setSelected] = useState(answers?.selectedBelief || '');

  const handleSelect = useCallback((belief) => {
    const newValue = selected === belief ? '' : belief;
    setSelected(newValue);
    onChange && onChange('selectedBelief', newValue);
  }, [selected, onChange]);

  const handleNext = useCallback(() => {
    if (!selected) return;
    onContinue();
  }, [selected, onContinue]);

  // Show loader until we have the AI text (or an error)
  if (aiLoading || (!aiError && !aiResponse)) {
    return (
      <div className={styles.mainContent}>
        <div className={styles.flowerContainer}>
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className={styles.petal} style={{ '--rotation': `${i * 45}deg` }}></div>
          ))}
        </div>
        <h2 className={styles.title}>Fetching your beliefs…</h2>
      </div>
    );
  }

  return (
    <div className={styles.mainContent}>
      <div className={styles.header}>
        <h1 className={styles.title}>Choose Your Battles</h1>
        <p className={styles.introduction}>
        Which belief feels the strongest right now?
        </p>
      </div>

      <div className={styles.beliefList}>
        {beliefLines.map((belief, idx) => {
          const isSelected = selected === belief;
          return (
            <div
              key={idx}
              onClick={() => handleSelect(belief)}
              className={isSelected ? `${styles.selectionCard} ${styles.selectionCardSelected}` : styles.selectionCard}
            >
              {/* radio indicator */}
              <div
                className={
                  isSelected ? `${styles.radioCircle} ${styles.radioCircleSelected}` : styles.radioCircle
                }
              >
                {isSelected && '✓'}
              </div>
              <span className={styles.beliefText}>{belief}</span>
            </div>
          );
        })}
      </div>

      {/* Error state */}
      {aiError && <p className="text-red-500 mt-4">{aiError}</p>}

      <p className={styles.introduction} style={{ marginBottom: '32px', fontStyle: 'italic' }}>This is the one we'll transform today.</p>

      <div className={styles.actionButtons}>
        <button
          className={`${styles.primaryButton} ${styles.withIcon}`}
          onClick={handleNext}
          disabled={!selected}
        >
          Continue <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
} 