'use client';

import React, { useCallback } from 'react';
import styles from '../../../app/feartofuel/styles/fear_to_fuel.module.css';

export default function Day1Main1({ answers, onChange, onContinue }) {
  const vision = answers.projectVision || '';

  // Update projectVision via batch-save onContinue
  const handleVisionChange = useCallback(
    (e) => onChange('projectVision', e.target.value),
    [onChange]
  );

  const handleNext = useCallback(
    () => onContinue('1-main-2'),
    [onContinue]
  );

  return (
    <div className={styles.mainContent}>
      <div className={styles.header}>
        <h1 className={styles.title}>Project Vision</h1>
        <p className={styles.introductionMargin}>
          Let's start building your fear map by understanding your project vision.
        </p>
      </div>

      <div>
        <label htmlFor="projectVision" className={styles.formLabel}>
          First, write your project idea in its simplest form:
        </label>
        <textarea
          id="projectVision"
          className={styles.textInput}
          placeholder="Example: Create a sustainable clothing brand"
          rows={4}
          value={vision}
          onChange={handleVisionChange}
        />
      </div>

      <div className={styles.actionButtons}>
        <button
          type="button"
          className={`${styles.primaryButton} ${styles.withIcon}`}
          onClick={handleNext}
          disabled={!vision.trim()}
        >
          Next
        </button>
      </div>
    </div>
  );
}