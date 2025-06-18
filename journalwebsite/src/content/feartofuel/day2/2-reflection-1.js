'use client';

import React, { useCallback } from 'react';
import styles from '../../../app/feartofuel/styles/fear_to_fuel.module.css';


export default function Day2Reflection1({ answers, onChange, onContinue }) {
  const reflection = answers.reflectionResponse || '';

  const handleReflectionChange = useCallback(
    (e) => onChange('reflectionResponse', e.target.value),
    [onChange]
  );

  const handleSubmit = useCallback(
    () => onContinue(),
    [onContinue]
  );

  return (
    <div className={styles.mainContent}>
      <div className={styles.header}>
        <h1 className={styles.title}>Reflection</h1>
        <p className={styles.introductionMargin}>
          Take a moment to reflect on your experience with the main exercise.
        </p>
      </div>

      <div>
        <h2 className={styles.formLabel}>What's one new way you could think about your failures?</h2>
        <textarea
          className={styles.textInput}
          placeholder="Write your reflection here..."
          rows={6}
          value={reflection}
          onChange={handleReflectionChange}
        />
      </div>

      <div className={styles.actionButtons}>
        <button
          className={`${styles.primaryButton} ${styles.withIcon}`}
          onClick={handleSubmit}
          disabled={!reflection.trim()}
        >
          Submit Reflection
        </button>
      </div>
    </div>
  );
} 