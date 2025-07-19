'use client';

import React, { useState, useCallback } from 'react';
import styles from '../../../app/feartofuel/styles/fear_to_fuel.module.css';
import { ArrowRight } from 'lucide-react';

export default function Day5Main1Explore({ answers, onChange, onContinue }) {
  // Start with existing draft if any, otherwise the original AI feedback
  const [text, setText] = useState(
    answers?.beliefAnalysisDraft || answers?.beliefAnalysisFeedback || ''
  );

  const handleChange = useCallback((e) => {
    const value = e.target.value;
    setText(value);
    // Save user edits into a separate draft field so original AI feedback stays intact
    onChange && onChange('beliefAnalysisDraft', value);
  }, [onChange]);

  const handleNext = useCallback(() => {
    if (!text.trim()) return;
    onContinue(); // Goes to 5-main-2 thanks to updated PAGE_MAP order
  }, [text, onContinue]);

  return (
    <div className={styles.mainContent}>
      <div className={styles.header}>
        <h1 className={styles.title}>Refine Your Beliefs</h1>
        <p className={styles.introduction}>
        Let's try a different approach to uncover what's really holding you back.
        </p>
      </div>

      <div className={styles.formSection}>
        <label
          htmlFor="instantThought"
          className={styles.formLabel}
          style={{ marginTop: '16px' }}
        >
          Answer without thinking too hard: <br/> When you imagine starting your project tomorrow, what thought makes you freeze?
        </label>

        <textarea
          id="instantThought"
          type="text"
          value={text}
          onChange={handleChange}
          placeholder="Type the first thought that comes up…"
          className={styles.textInput}
        />
      </div>

      <div className={styles.actionButtons}>
        <button
          className={`${styles.primaryButton} ${styles.withIcon}`}
          onClick={handleNext}
          disabled={!text.trim()}
        >
          Continue <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
} 