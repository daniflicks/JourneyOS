'use client';

import CheckInList from '../../../app/feartofuel/components/CheckInList';
import styles from '../../../app/feartofuel/styles/fear_to_fuel.module.css';

// Static content data for Day 2 check‑in
const checkInItems = [
  { id: 'resistance', label: 'Resistance to looking at past failures' },
  { id: 'defensive', label: 'Feeling defensive about past choices' },
  { id: 'avoidance', label: 'Wanting to skip over painful memories' },
  { id: 'tension', label: 'Tension when thinking about previous attempts' },
  { id: 'proving', label: "Urge to prove 'I\'m past all that'" },
];

/**
 * Day 2 Check‑In Step
 * Props injected via DayLayout: answers, onChange, onContinue
 */
export default function Day2Page2({ answers, onChange, onContinue }) {
  const selectedItems = answers.selectedItems || [];

  return (
    <div className={styles.powerUpContainer}>
      <div className={styles.header}>
        <h2 className={styles.checkInTitle}>Pattern Check-In</h2>
        <p className={styles.checkInQuestion}>Notice which of these patterns feel present for you today:</p>
      </div>
      
      <CheckInList
        items={checkInItems}
        selectedItems={selectedItems}
        onChange={(newSelected) => onChange('selectedItems', newSelected)}
      />

      {selectedItems.length > 0 && (
        <div className={styles.calloutBox}>
          It's natural to feel some resistance when looking at past experiences. Remember, we're not here to judge but to understand and learn.
        </div>
      )}

      <div className={styles.actionButtons}>
        <button
          type="button"
          onClick={() => onContinue('2-checkin-3')}
          className={styles.primaryButton}
          style={{ marginBottom: '24px' }}
        >
          Start Guided Breathing Exercise → (45 seconds)
        </button>
        <button
          type="button"
          onClick={() => onContinue('2-main-1')}
          className={styles.secondaryButton}
        >
          Skip to Main Exercise
        </button>
      </div>
    </div>
  );
}