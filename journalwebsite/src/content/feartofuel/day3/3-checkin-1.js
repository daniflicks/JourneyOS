'use client';

import CheckInList from '../../../app/feartofuel/components/CheckInList';
import styles from '../../../app/feartofuel/styles/fear_to_fuel.module.css';

// Static content data for Day 3 check‑in
const checkInItems = [
  { id: 'resistance', label: 'Resistance to looking at past failures' },
  { id: 'defensive', label: 'Feeling defensive about past choices' },
  { id: 'avoidance', label: 'Wanting to skip over painful memories' },
  { id: 'tension', label: 'Tension when thinking about previous attempts' },
  { id: 'proving', label: "Urge to prove 'I\'m past all that'" },
];

/**
 * Day 3 Check‑In Step
 * Props injected via DayLayout: answers, onChange, onContinue
 */
export default function Day3Page1({ answers, onChange, onContinue }) {
  const selectedItems = answers.selectedItems || [];

  return (
    <div className={styles.powerUpContainer}>
      <div className={styles.header}>
        <h1 className={styles.title}>Root Cause Excavation</h1>
        <blockquote className={styles.quote}>
          "Each past failure holds a lesson that can light your way forward."
        </blockquote>
      </div>

      <div className={styles.introduction}>
        <p>
          Today's Journey: Understanding Your Fear Story. Today we'll gently explore your history with failure to understand how it shapes your current fears. Sometimes our biggest blocks come from past experiences we haven't fully processed.
        </p>
      </div>

      <CheckInList
        items={checkInItems}
        selectedItems={selectedItems}
        onChange={(newSelected) => onChange('selectedItems', newSelected)}
        questionText="Notice which of these patterns feel present for you today:"
      />

      {selectedItems.length > 0 && (
        <div className={styles.calloutBox}>
          It's natural to feel some resistance when looking at past experiences. Remember, we're not here to judge but to understand and learn.
        </div>
      )}

      <div className={styles.actionButtons}>
        <button
          type="button"
          onClick={() => onContinue('3-checkin-2')}
          className={styles.primaryButton}
          style={{ marginBottom: '24px' }}
        >
          Start Guided Breathing Exercise → (45 seconds)
        </button>
        <button
          type="button"
          onClick={() => onContinue('3-main-1')}
          className={styles.secondaryButton}
        >
          Skip to Main Exercise
        </button>
      </div>
    </div>
  );
} 