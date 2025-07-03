'use client';

import styles from '../../../app/feartofuel/styles/fear_to_fuel.module.css';

/**
 * Day 5 Initial Check-In Step - Introduction Page
 */
export default function Day5Page1({ onContinue }) {
  return (
    <div className={styles.fearMappingContainer}>
      {/* Title */}
      <div>
        <h1 className={styles.title}>Your Invisible Rules</h1>
      </div>

      {/* Quote */}
      <div className={styles.quoteContainer}>
        <p className={styles.quoteText}>
          "The rules you live by were written by a younger you who didn't know how strong you'd become."
        </p>
      </div>

      {/* Introduction */}
      <div className={styles.explanationCard}>
        <p className={styles.introduction} style={{ textAlign: 'left' }}>
          Yesterday you discovered your fears point to your values. Today we'll find the invisible rules that turn those protective instincts into barriers.<br/><br/>
          Every limiting belief is just a decision you made to stay safe during a difficult time. These served you once, but may not fit who you're becoming.<br/><br/>
          The best part? Any belief you learned can be unlearned and replaced with one that serves your growth.
        </p>
      </div>

      {/* CTA */}
      <div className={styles.actionButtons}>
        <button type="button" onClick={() => onContinue('5-checkin-2')} className={styles.primaryButton}>
          Begin the Exercise
        </button>
      </div>
    </div>
  );
}
