'use client';

import React from 'react';
import styles from '../styles/calendar.module.css';

const WeekView = ({ currentDate, timeIncrement }) => {
  // Generate array of hours (12-hour format with AM/PM)
  const hours = Array.from({ length: 24 }, (_, i) => {
    const hour = i % 12 || 12;
    const ampm = i < 12 ? 'AM' : 'PM';
    return `${hour}${ampm}`;
  });

  // Generate array of days for the current week
  const getDaysOfWeek = () => {
    const days = [];
    const weekStart = new Date(currentDate);
    weekStart.setDate(currentDate.getDate() - currentDate.getDay() + 1); // Start from Monday

    for (let i = 0; i < 7; i++) {
      const day = new Date(weekStart);
      day.setDate(weekStart.getDate() + i);
      days.push(day);
    }
    return days;
  };

  const weekDays = getDaysOfWeek();
  const dayNames = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  // Format date for display in header
  const formatDate = (date) => {
    return date.getDate();
  };

  // Check if a date is today
  const isToday = (date) => {
    const today = new Date();
    return date.getDate() === today.getDate() &&
           date.getMonth() === today.getMonth() &&
           date.getFullYear() === today.getFullYear();
  };

  return (
    <div className={styles.weekViewContainer}>
      <div className={styles.timeColumn}>
        {hours.map((hour) => (
          <div key={hour} className={styles.timeSlot}>
            {hour}
          </div>
        ))}
      </div>
      <div className={styles.daysContainer}>
        <div className={styles.weekDaysHeader}>
          {weekDays.map((day, index) => (
            <div
              key={index}
              className={styles.weekDayHeader}
            >
              <div>{dayNames[index]}</div>
              <div className={isToday(day) ? styles.dayNumberToday : ''}>
                {formatDate(day)}
              </div>
            </div>
          ))}
        </div>
        <div className={styles.timeGrid}>
          {weekDays.map((_, dayIndex) => (
            <div key={dayIndex} className={styles.dayColumn}>
              {hours.map((hour) => (
                <div key={`${dayIndex}-${hour}`} className={styles.timeCell} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WeekView; 