'use client';

import styles from '../styles/calendar.module.css';

const WEEKDAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

export default function MonthView() {
  // Temporary array of 35 days (5 weeks) for UI layout
  const days = Array.from({ length: 35 }, (_, i) => i + 1);

  return (
    <div className={styles.monthGrid}>
      <div className={styles.weekdayHeader}>
        {WEEKDAYS.map((day) => (
          <div key={day} className={styles.weekdayCell}>
            {day}
          </div>
        ))}
      </div>

      <div className={styles.daysGrid}>
        {days.map((day) => (
          <div
            key={day}
            className={`${styles.dayCell} ${
              day === 2 ? styles.dayCellToday : ''
            } ${day > 30 ? styles.dayCellOtherMonth : ''}`}
          >
            <span className={`${styles.dayNumber} ${
              day === 2 ? styles.dayNumberToday : ''
            }`}>
              {day}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
} 