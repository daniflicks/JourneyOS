'use client';

import CheckInList from '../../../app/feartofuel/components/CheckInList';
import styles from '../../../app/feartofuel/styles/fear_to_fuel.module.css';

const checkInItems = [
  { id: 'ready', label: 'Ready to question everything' },
  { id: 'defensive', label: 'Defensive - my beliefs keep me safe' },
  { id: 'curious', label: 'Curious but skeptical' },
  { id: 'worried', label: "Worried what I'll find" },
  { id: 'justFacts', label: 'These ARE just facts about me' },
];

export default function Day5CheckIn2({ answers, onChange, onContinue }) {
  const selectedItems = answers?.selectedItems || [];

  return (
    <div className={styles.powerUpContainer}>
      <div className={styles.header}>
        <h2 className={styles.checkInTitle}>Quick Check-In</h2>
        <p className={styles.checkInQuestion}>How are you feeling about examining your beliefs?</p>
      </div>

      <CheckInList
        items={checkInItems}
        selectedItems={selectedItems}
        onChange={(newSelected) => onChange('selectedItems', newSelected)}
      />

      {Array.isArray(selectedItems) && selectedItems.length > 0 && (
        <div className={styles.calloutBox}>
          Noticing your initial reaction helps you approach this work with honesty. Whatever you feel is a valid starting point.
        </div>
      )}

      <div className={styles.actionButtons}>
        <button
          type="button"
          onClick={() => onContinue('5-checkin-3')}
          className={styles.primaryButton}
          style={{ marginBottom: '24px' }}
        >
          Start Guided Breathing Exercise → (45 seconds)
        </button>
        <button
          type="button"
          onClick={() => onContinue('5-main-1')}
          className={styles.secondaryButton}
        >
          Skip to Main Exercise
        </button>
      </div>
    </div>
  );
} 