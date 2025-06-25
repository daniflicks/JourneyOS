'use client';

import styles from '../../../app/feartofuel/styles/fear_to_fuel.module.css';

/**
 * Day 2 Initial Check‑In Step - Introduction Page
 * Props injected via DayLayout: answers, onChange, onContinue
 */
export default function Day2Page1({ answers, onChange, onContinue }) {
  return (
    <div className={styles.fearMappingContainer}>
      {/* Title Section */}
      <div>
        <h1 className={styles.title}>Root Cause Excavation</h1>
      </div>
      
      {/* Quote Section */}
      <div className={styles.quoteContainer}>
        <p className={styles.quoteText}>Each past failure holds a lesson that can light your way forward.</p>
      </div>
      
      {/* Introduction Section */}
      <div className={styles.explanationCard}>
        <p className={styles.introduction} style={{ textAlign: 'left' }}>
        Today we're exploring your fear story to understand how past experiences shaped your current fears - and more importantly, how to rewrite that story. <br/> Yes, we'll examine some difficult memories, but we'll also discover the resilience and wisdom you gained from them. Sometimes our biggest blocks come from past experiences we haven't fully processed. If this feels heavy, that means you're about to break through to something better.
        </p>
      </div>

      {/* CTA Button */}
      <div className={styles.actionButtons}>
        <button
          type="button"
          onClick={() => onContinue('2-checkin-2')}
          className={styles.primaryButton}
        >
          Begin the Exercise
        </button>
      </div>
    </div>
  );
}
