import React from 'react';
import styles from '../styles/calendar.module.css';

const TimeIncrementToggle = ({ selectedIncrement, onIncrementChange }) => {
  const increments = [
    { value: 60, label: '1h' },
    { value: 30, label: '30m' },
    { value: 15, label: '15m' },
  ];

  return (
    <div className={styles.timeIncrementContainer}>
      {increments.map((increment) => (
        <button
          key={increment.value}
          className={`${styles.timeIncrementButton} ${
            selectedIncrement === increment.value ? styles.timeIncrementButtonActive : ''
          }`}
          onClick={() => onIncrementChange(increment.value)}
        >
          {increment.label}
        </button>
      ))}
    </div>
  );
};

export default TimeIncrementToggle; 