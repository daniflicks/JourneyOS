'use client';

import React from 'react';
import { useDayOverview } from '../../../hooks/journeyHooks';
import styles from '../styles/journeyoverview.module.css';

/**
 * DailyTask — renders a single day card in the Journey Overview,
 * highlighting current, completed, or upcoming days based on store data.
 */
export default function DailyTask({ day, title, description, onDayClick }) {
  // Get the current day from the global journey store
  const { currentDay } = useDayOverview();

  // Determine status
  const isCurrent = day === currentDay;
  const isCompleted = day < currentDay;
  const isUpcoming = day > currentDay;

  // Determine if day is clickable
  const isClickable = (isCurrent || isCompleted) && onDayClick;

  // Choose CSS class and tooltip based on status
  let statusClass;
  let statusTitle;
  if (isCurrent) {
    statusClass = styles.statusCurrent;
    statusTitle = 'Current';
  } else if (isCompleted) {
    statusClass = styles.statusCompleted;
    statusTitle = 'Completed';
  } else {
    statusClass = styles.statusUpcoming;
    statusTitle = 'Upcoming';
  }

  return (
    <div 
      className={`${styles.taskItem} ${isCurrent ? styles.currentTask : ''}`}
      onClick={isClickable ? () => onDayClick(day) : undefined}
      style={{ cursor: isClickable ? 'pointer' : 'default' }}
    >
      <div className={styles.taskDay}>Day {day}</div>
      <div className={styles.taskContent}>
        <h4 className={`${styles.taskTitle} ${isCurrent ? styles.currentTitle : ''}`}>
          {title}
          {isCurrent && <span className={styles.currentLabel}>(Today)</span>}
        </h4>
        <p className={styles.taskDescription}>{description}</p>
      </div>
      <div className={styles.taskStatus}>
        <div
          className={`${styles.statusDot} ${statusClass}`}
          title={statusTitle}
        />
      </div>
    </div>
  );
}