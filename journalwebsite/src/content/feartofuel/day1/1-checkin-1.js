'use client';

import styles from '../../../app/feartofuel/styles/fear_to_fuel.module.css';

/**
 * Day 1 Initial Check‑In Step - Introduction Page
 * Props injected via DayLayout: answers, onChange, onContinue
 */
export default function Day1Page1({ answers, onChange, onContinue }) {
  return (
    <div className={styles.fearMappingContainer}>
      {/* Title Section */}
      <div className={styles.titleSection}>
        <h1 className={styles.title}>Fear Mapping</h1>
      </div>
      
      {/* Welcome Section */}
      <div className={styles.welcomeCard}>
        <p className={styles.introduction}>
          Hey there, brave soul! I'm so glad you're here and ready to take this first step. I want you to know that just by showing up today, you're already proving that you're stronger than your fears.
        </p>
      </div>
      
      {/* Quote Section */}
      <div className={styles.quoteContainer}>
        <p className={styles.quoteText}>Every fear you face is a doorway to freedom.</p>
      </div>
      
      {/* Explanation Section */}
      <div className={styles.explanationCard}>
        <p className={styles.introduction} style={{ textAlign: 'left' }}>
          Today we're going to get real about what's holding you back. Fair warning – this might stir up some feelings, but that means it's working. When our fears stay vague and undefined, they feel huge and impossible. By mapping them out clearly, we turn overwhelming anxieties into specific challenges we can tackle one by one.
        </p>
      </div>

      {/* CTA Button */}
      <div className={styles.actionButtons}>
        <button
          type="button"
          onClick={() => onContinue('1-checkin-2')}
          className={styles.primaryButton}
        >
          Begin the Exercise
        </button>
      </div>
    </div>
  );
} 