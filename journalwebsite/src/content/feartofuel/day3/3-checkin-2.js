'use client';

import CheckInList from '../../../app/feartofuel/components/CheckInList';
import styles from '../../../app/feartofuel/styles/fear_to_fuel.module.css';

// Static content data for Day 3 check‑in
const checkInItems = [
  { id: 'worstCase', label: 'My mind jumps to worst-case scenarios' },
  { id: 'pastPain', label: 'I feel like past pain guarantees future pain' },
  { id: 'whatIf', label: 'I add layers of "what if" to real experiences' },
  { id: 'worseNext', label: 'I believe the next time will be even worse' },
  { id: 'avoidAmplified', label: 'I avoid situations because of amplified memories' },
];

/**
 * Day 3 Check‑In Step
 * Props injected via DayLayout: answers, onChange, onContinue
 */
export default function Day3Page2({ answers, onChange, onContinue }) {
  const selectedItems = answers?.selectedItems || [];

  return (
    <div className={styles.powerUpContainer}>
      <div className={styles.header}>
        <h2 className={styles.checkInTitle}>Catastrophizing Check-In</h2>
        <p className={styles.checkInQuestion}>Notice which of these patterns feel present for you today:</p>
      </div>
      
      <CheckInList
        items={checkInItems}
        selectedItems={selectedItems}
        onChange={(newSelected) => onChange('selectedItems', newSelected)}
      />

      {Array.isArray(selectedItems) && selectedItems.length > 0 && (
        <div className={styles.calloutBox}>
          Recognizing these patterns is the first step to changing them. Your mind amplifies threats to protect you, but we can teach it to see more possibilities.
        </div>
      )}

      <div className={styles.actionButtons}>
        <button
          type="button"
          onClick={() => onContinue('3-checkin-3')}
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