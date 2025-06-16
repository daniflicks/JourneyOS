import React, { useState } from 'react';
import styles from '../styles/calendar.module.css';

const TomorrowPreview = () => {
  const [keyFocus, setKeyFocus] = useState('');
  const [firstStep, setFirstStep] = useState('');
  const [checklist, setChecklist] = useState({
    reviewSchedule: false,
    prepareWorkspace: false,
    setIntention: false,
    chooseCelebration: false,
  });

  const handleChecklistChange = (key) => {
    setChecklist(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <div className={styles.tomorrowContainer}>
      <h2 className={styles.sectionTitle}>
        <span className={styles.tomorrowIcon}>📅</span>
        TOMORROW'S PREVIEW
      </h2>

      <div className={styles.tomorrowContent}>
        <div className={styles.tomorrowChecklist}>
          {Object.entries(checklist).map(([key, checked]) => (
            <label key={key} className={styles.checklistItem}>
              <input
                type="checkbox"
                checked={checked}
                onChange={() => handleChecklistChange(key)}
                className={styles.checkbox}
              />
              <span className={styles.checklistText}>
                {key.split(/(?=[A-Z])/).join(' ')}
              </span>
            </label>
          ))}
        </div>

        <div className={styles.tomorrowFocus}>
          <h3 className={styles.focusTitle}>
            <span className={styles.focusIcon}>🎯</span>
            Tomorrow's Key Focus
          </h3>
          <textarea
            value={keyFocus}
            onChange={(e) => setKeyFocus(e.target.value)}
            placeholder="What's the most important thing to accomplish tomorrow? What's your first step?"
            className={styles.focusTextarea}
          />

          <div className={styles.firstStepSection}>
            <h4 className={styles.firstStepTitle}>First step to achieve this:</h4>
            <input
              type="text"
              value={firstStep}
              onChange={(e) => setFirstStep(e.target.value)}
              placeholder="What specific action will you take first?"
              className={styles.firstStepInput}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TomorrowPreview; 