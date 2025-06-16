import React, { useState } from 'react';
import styles from '../styles/calendar.module.css';

const MorningCheckIn = () => {
  const [energyLevel, setEnergyLevel] = useState(7);
  const [confidenceLevel, setConfidenceLevel] = useState(8);
  const [mainGoal, setMainGoal] = useState('');

  return (
    <div className={styles.morningCheckInContainer}>
      <h2 className={styles.sectionTitle}>MORNING CHECK-IN (Before starting work)</h2>
      
      <div className={styles.checkInContent}>
        <div className={styles.levelsContainer}>
          <div className={styles.levelContainer}>
            <label className={styles.levelLabel}>
              Energy Level (1-10)
            </label>
            <div className={styles.sliderContainer}>
              <input
                type="range"
                min="1"
                max="10"
                value={energyLevel}
                onChange={(e) => setEnergyLevel(Number(e.target.value))}
                className={styles.levelSlider}
              />
              <div className={styles.levelValue}>{energyLevel}</div>
            </div>
          </div>

          <div className={styles.levelContainer}>
            <label className={styles.levelLabel}>
              Confidence Level (1-10)
            </label>
            <div className={styles.sliderContainer}>
              <input
                type="range"
                min="1"
                max="10"
                value={confidenceLevel}
                onChange={(e) => setConfidenceLevel(Number(e.target.value))}
                className={styles.levelSlider}
              />
              <div className={styles.levelValue}>{confidenceLevel}</div>
            </div>
          </div>
        </div>

        <div className={styles.mainGoalContainer}>
          <label className={styles.mainGoalLabel}>
            Today's Main Goal
          </label>
          <div className={styles.mainGoalInputContainer}>
            <input
              type="text"
              value={mainGoal}
              onChange={(e) => setMainGoal(e.target.value)}
              placeholder="Complete project prototype"
              className={styles.mainGoalInput}
            />
            <div className={styles.targetIcon}>
              <svg viewBox="0 0 24 24" fill="none" className={styles.targetSvg}>
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="2"/>
                <circle cx="12" cy="12" r="2" fill="currentColor"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MorningCheckIn; 