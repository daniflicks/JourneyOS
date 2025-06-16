'use client';

import React, { useCallback } from 'react';
import styles from '../../../app/feartofuel/styles/fear_to_fuel.module.css';
import { ArrowRight } from 'lucide-react';

export default function Day1Main3({ answers, onChange, onContinue }) {
  const projectVision = answers.projectVision || 'No vision provided.';
  const motivation = answers.projectMotivation || '';

  const handleMotivationChange = useCallback(
    (e) => onChange('projectMotivation', e.target.value),
    [onChange],
  );

  const handleNext = useCallback(
    () => onContinue(),
    [onContinue]
  );

  return (
    <div className={styles.mainContent}>
      <div className={styles.header}>
        <h1 className={styles.title}>Project Vision</h1>
        <p className={styles.introduction}>
          Understanding your "why" will help anchor you when fears arise.
        </p>
      </div>

      <div className={styles.calloutBox}>
        <h3 className={styles.formLabelBold}>Your project:</h3>
        <p>{projectVision}</p>
      </div>

      <div className={styles.formSection}>
        <h2 className={styles.formLabel}>
          What made you want to pursue this?
        </h2>
        <label htmlFor="projectMotivation" className="sr-only">
          Project Motivation
        </label>
        <textarea
          id="projectMotivation"
          className={styles.textInput}
          placeholder="Why are you doing this project?"
          rows={4}
          value={motivation}
          onChange={handleMotivationChange}
        />
      </div>

      <div className={styles.actionButtons}>
        <button
          className={`${styles.primaryButton} ${styles.withIcon}`}
          onClick={handleNext}
          disabled={!motivation.trim()}
        >
          Continue <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
}
