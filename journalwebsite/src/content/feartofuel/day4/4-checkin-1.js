'use client';

import styles from '../../../app/feartofuel/styles/fear_to_fuel.module.css';

/**
 * Day 4 Initial Check‑In Step - Introduction Page
 * Props injected via DayLayout: answers, onChange, onContinue
 */
export default function Day4Page1({ answers, onChange, onContinue }) {
  return (
    <div className={styles.fearMappingContainer}>
      {/* Title Section */}
      <div>
        <h1 className={styles.title}>The Fear Flip</h1>
      </div>
      
      {/* Quote Section */}
      <div className={styles.quoteContainer}>
        <p className={styles.quoteText}>The things that scare you most, reveal what you treasure most.</p>
      </div>
      
      {/* Introduction Section */}
      <div className={styles.explanationCard}>
        <p className={styles.introduction} style={{ textAlign: 'left' }}>
          You've mapped your fears. Found their roots. Seen how you amplify them. <br/> <br/> Now discover their secret: every fear is a love in disguise. <br/> <br/> What you fear losing shows what you're here to protect.
        </p>
      </div>

      {/* CTA Button */}
      <div className={styles.actionButtons}>
        <button
          type="button"
          onClick={() => onContinue('4-checkin-2')}
          className={styles.primaryButton}
        >
          Begin the Exercise
        </button>
      </div>
    </div>
  );
}
