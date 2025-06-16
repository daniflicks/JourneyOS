'use client';

import React from 'react';
import Calendar from './components/Calendar';
import AddEventButton from './components/AddEventButton';
import styles from './styles/calendar.module.css';

export default function CalendarPage() {
  return (
    <div className={styles.calendarContainer}>
      <div className={styles.pageHeader}>
        <div className={styles.titleContainer}>
          <h1 className={styles.pageTitle}>
            <span className={styles.primaryText}>Project</span>
            <span className={styles.secondaryText}>Calendar</span>
          </h1>
          <p className={styles.pageSubtitle}>
            Plan, track, and achieve your goals
          </p>
        </div>
        <AddEventButton />
      </div>

      <Calendar />
    </div>
  );
} 