'use client';

import React from 'react';
import Link from 'next/link';
import { useDashboardData } from '../../../hooks/journeyHooks';
import PAGE_MAP from '../../../config/pageMap';
import { programModules } from '../../journeyoverview/constants/journeyData';
import styles from '../styles/dashboard.module.css';

/**
 * Dashboard card showing current journey progress and resume link
 */
export default function FearJournalCard({ hydrated = false }) {
  const { currentDay, resumePage, sectionsStatus } = useDashboardData();
  const { checkIn, mainExercise, reflection } = sectionsStatus;

  // Don't render dynamic content until hydrated to prevent hydration mismatches
  if (!hydrated) {
    return (
      <div className={styles.journeyCard}>
        <div className={styles.focusSection}>
          <h2 className={styles.journeyTitle}>Fear to Fuel Journey</h2>
          <p className={styles.progressText}>Loading...</p>
        </div>
      </div>
    );
  }

  // Build list of steps for today
  const pages = PAGE_MAP[currentDay] || [];
  // First page ID (e.g. "1-checkin-1")
  const firstPageId = pages[0]?.id || '';

  // resumePage might be a string or an object { id, ai? }
  const resumePageId =
    typeof resumePage === 'string'
      ? resumePage
      : resumePage?.id || '';

  // Pick the target page ID
  const targetPage = resumePageId || firstPageId;

  // Find the current day's task description
  const getCurrentDayDescription = () => {
    for (const programModule of programModules) {
      const task = programModule.tasks.find(task => task.day === currentDay);
      if (task) {
        return task.description;
      }
    }
    return 'Continue your journey of transforming fear into fuel for your project.';
  };

  const todayDescription = getCurrentDayDescription();

  return (
    <div className={styles.journeyCard}>
      <div className={styles.focusSection}>
        <h2 className={styles.journeyTitle}>Fear to Fuel Journey</h2>
        <p className={styles.progressText}>Progress: Day {currentDay}/30</p>
        <h3 className={styles.focusTitle}>Today's Focus</h3>
        <p className={styles.focusDescription}>
          {todayDescription}
        </p>

        <div className={styles.taskList}>
          <div className={styles.taskItem}>
            <div className={styles.taskCheck}>
              {checkIn && (
                <svg viewBox="0 0 24 24">
                  <path d="M5 13l4 4L19 7" />
                </svg>
              )}
            </div>
            <span className={styles.taskText}>Power-Up Exercise</span>
          </div>
          
          <div className={styles.taskItem}>
            <div className={styles.taskCheck}>
              {mainExercise && (
                <svg viewBox="0 0 24 24">
                  <path d="M5 13l4 4L19 7" />
                </svg>
              )}
            </div>
            <span className={styles.taskText}>Main Exercise</span>
          </div>
          
          <div className={styles.taskItem}>
            <div className={styles.taskCheck}>
              {reflection && (
                <svg viewBox="0 0 24 24">
                  <path d="M5 13l4 4L19 7" />
                </svg>
              )}
            </div>
            <span className={styles.taskText}>Reflection</span>
          </div>
        </div>

        <Link
          href={`/feartofuel/${currentDay}/${targetPage}`}
          className={styles.continueButton}
        >
          {resumePageId ? 'Continue Your Journey' : 'Begin Your Journey'}
        </Link>
      </div>
    </div>
  );
}