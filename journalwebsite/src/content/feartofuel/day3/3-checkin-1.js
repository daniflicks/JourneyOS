'use client';

import styles from '../../../app/feartofuel/styles/fear_to_fuel.module.css';

/**
 * Day 3 Initial Check‑In Step - Introduction Page
 * Props injected via DayLayout: answers, onChange, onContinue
 */
export default function Day3Page1({ answers, onChange, onContinue }) {
  return (
    <div className={styles.fearMappingContainer}>
      {/* Title Section */}
      <div>
        <h1 className={styles.title}>The Catastrophizing Reality Check</h1>
      </div>
      
      {/* Quote Section */}
      <div className={styles.quoteContainer}>
        <p className={styles.quoteText}>Between what happened and what we fear will happen again lies a world of possibility.</p>
      </div>
      
      {/* Introduction Section */}
      <div className={styles.explanationCard}>
        <p className={styles.introduction} style={{ textAlign: 'left' }}>
        Today we'll explore how our minds magnify past experiences into future catastrophes. When something difficult happens, our brains create an even scarier version for the future. <br/> <br/> Let's learn to see the difference.
        </p>
      </div>

      {/* CTA Button */}
      <div className={styles.actionButtons}>
        <button
          type="button"
          onClick={() => onContinue('3-checkin-2')}
          className={styles.primaryButton}
        >
          Begin the Exercise
        </button>
      </div>
    </div>
  );
} 