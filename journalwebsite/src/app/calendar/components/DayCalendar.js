import React from 'react';
import styles from '../styles/calendar.module.css';

const DayCalendar = ({ currentDate }) => {
  // Generate array of hours (12-hour format with AM/PM)
  const hours = Array.from({ length: 24 }, (_, i) => {
    const hour = i % 12 || 12;
    const ampm = i < 12 ? 'AM' : 'PM';
    return { hour, ampm, index: i };
  });

  return (
    <div className={styles.dayCalendarContainer}>
      <div className={styles.dayTimeColumn}>
        {hours.map(({ hour, ampm, index }) => (
          <div key={index} className={styles.dayTimeSlot}>
            <span className={styles.dayTimeLabel}>
              {`${hour}:00 ${ampm}`}
            </span>
          </div>
        ))}
      </div>
      <div className={styles.dayEventsColumn}>
        {hours.map(({ index }) => (
          <div key={index} className={styles.dayEventSlot}>
            {/* Events will be rendered here */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DayCalendar; 