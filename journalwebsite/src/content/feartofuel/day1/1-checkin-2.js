'use client';

import CheckInList from '../../../app/feartofuel/components/CheckInList';
import styles      from '../../../app/feartofuel/styles/fear_to_fuel.module.css';

// Static content data for Day 1 check‑in
const checkInItems = [
  { id: 'resistance1', label: 'Finding reasons to delay starting' },
  { id: 'resistance2', label: 'Thinking about other tasks instead' },
  { id: 'resistance3', label: 'Feeling physical tension about this project' },
];

/**
 * Day 1 Check‑In Step
 * Props injected via DayLayout: answers, onChange, onContinue
 */
export default function Day1Page1({ answers, onChange, onContinue }) {
  const selectedItems = answers.selectedItems || [];

  return (
    <div className={styles.powerUpContainer}>
      <div className={styles.header}>
        <h2 className={styles.checkInTitle}>Mini Pattern Check-In</h2>
        <p className={styles.checkInQuestion}>Before we start, check any you're experiencing right now:</p>
      </div>
      
      <CheckInList
        items={checkInItems}
        selectedItems={selectedItems}
        onChange={(newSelected) => onChange('selectedItems', newSelected)}
      />

      {selectedItems.length > 0 && (
        <div className={styles.calloutBox}>
          Noticing these patterns is the first step to working with them. It's completely normal to experience resistance at the beginning of something new.
        </div>
      )}

      <div className={styles.actionButtons}>
        <button
          type="button"
          onClick={() => onContinue('1-checkin-3')}
          className={styles.primaryButton}
          style={{ marginBottom: '24px' }}
        >
          Start Guided Breathing Exercise → (45 seconds)
        </button>
        <button
          type="button"
          onClick={() => onContinue('1-main-1')}
          className={styles.secondaryButton}
        >
          Skip to Main Exercise
        </button>
      </div>
    </div>
  );
}