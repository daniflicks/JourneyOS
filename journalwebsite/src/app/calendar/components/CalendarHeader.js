'use client';

import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import styles from '../styles/calendar.module.css';
import TimeIncrementToggle from './TimeIncrementToggle';

const CalendarHeader = ({
  currentDate,
  onPrevMonth,
  onNextMonth,
  view,
  onViewChange,
  selectedIncrement,
  onIncrementChange,
}) => {
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  return (
    <div className={styles.headerContainer}>
      <div className={styles.navigationContainer}>
        <button className={`${styles.navButton} ${styles.navButtonLeft}`} onClick={onPrevMonth}>
          <ChevronLeft className="w-5 h-5" />
        </button>
        <div className={styles.monthDisplay}>
          {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
        </div>
        <button className={`${styles.navButton} ${styles.navButtonRight}`} onClick={onNextMonth}>
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      <div className={styles.viewToggleContainer}>
        {(view === 'week' || view === 'day') && (
          <TimeIncrementToggle
            selectedIncrement={selectedIncrement}
            onIncrementChange={onIncrementChange}
          />
        )}
        <button
          className={`${styles.viewToggleButton} ${view === 'month' ? styles.viewToggleButtonActive : ''}`}
          onClick={() => onViewChange('month')}
        >
          Month
        </button>
        <button
          className={`${styles.viewToggleButton} ${view === 'week' ? styles.viewToggleButtonActive : ''}`}
          onClick={() => onViewChange('week')}
        >
          Week
        </button>
        <button
          className={`${styles.viewToggleButton} ${view === 'day' ? styles.viewToggleButtonActive : ''}`}
          onClick={() => onViewChange('day')}
        >
          Day
        </button>
      </div>
    </div>
  );
};

export default CalendarHeader; 