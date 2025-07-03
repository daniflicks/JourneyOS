'use client';

import CheckInList from '../../../app/feartofuel/components/CheckInList';
import styles from '../../../app/feartofuel/styles/fear_to_fuel.module.css';

// Static content data for Day 4 check‑in
const checkInItems = [
  { id: 'skeptical', label: 'Skeptical that fear could be helpful' },
  { id: 'fearsNotValid', label: 'Worried this means my fears aren\'t valid' },
  { id: 'resistant', label: 'Resistant to seeing fear differently' },
  { id: 'fearNegative', label: 'Fear is just negative, period' },
  { id: 'readyPerspective', label: 'Ready for a new perspective' },
];

/**
 * Day 4 Check‑In Step
 * Props injected via DayLayout: answers, onChange, onContinue
 */
export default function Day4Page2({ answers, onChange, onContinue }) {
  const selectedItems = answers?.selectedItems || [];

  return (
    <div className={styles.powerUpContainer}>
      <div className={styles.header}>
        <h2 className={styles.checkInTitle}>Mini Pattern Check-In</h2>
        <p className={styles.checkInQuestion}>How are you feeling about today's journey?</p>
      </div>
      
      <CheckInList
        items={checkInItems}
        selectedItems={selectedItems}
        onChange={(newSelected) => onChange('selectedItems', newSelected)}
      />

      {Array.isArray(selectedItems) && selectedItems.length > 0 && (
        <div className={styles.calloutBox}>
          Whatever you're feeling is valid. Today we'll explore how even our most challenging fears contain wisdom about what matters most to us.
        </div>
      )}

      <div className={styles.actionButtons}>
        <button
          type="button"
          onClick={() => onContinue('4-checkin-3')}
          className={styles.primaryButton}
          style={{ marginBottom: '24px' }}
        >
          Start Guided Breathing Exercise → (45 seconds)
        </button>
        <button
          type="button"
          onClick={() => onContinue('4-main-1')}
          className={styles.secondaryButton}
        >
          Skip to Main Exercise
        </button>
      </div>
    </div>
  );
} 