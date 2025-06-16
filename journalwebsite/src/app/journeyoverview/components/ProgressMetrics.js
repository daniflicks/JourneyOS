'use client';

import React from 'react';
import { BarChart2, Calendar, TrendingUp } from 'lucide-react';
import styles from '../styles/journeyoverview.module.css';
import { useProgressMetrics } from '../../../hooks/journeyHooks';

export default function ProgressMetrics() {
  // Pull real metrics from Zustand store
  const { journeyPercent, streak, currentPhase } = useProgressMetrics();

  // Format values
  const completionValue = `${journeyPercent}%`;
  const streakValue = `${streak} day${streak === 1 ? '' : 's'}`;
  const phaseValue = currentPhase;

  const metrics = {
    completion: { label: 'COMPLETION', value: completionValue },
    streak:     { label: 'STREAK',     value: streakValue     },
    phase:      { label: 'CURRENT PHASE', value: phaseValue  },
  };

  return (
    <div className={styles.metricsGrid}>
      {/* Completion */}
      <div className={styles.metricCard}>
        <div>
          <div className={styles.metricLabel}>{metrics.completion.label}</div>
          <div className={styles.metricNumber}>{metrics.completion.value}</div>
        </div>
        <div className={`${styles.iconContainer} ${styles.iconCompletionBg}`}>
          <BarChart2 className={`${styles.icon} ${styles.iconCompletion}`} />
        </div>
      </div>

      {/* Streak */}
      <div className={styles.metricCard}>
        <div>
          <div className={styles.metricLabel}>{metrics.streak.label}</div>
          <div className={styles.metricNumber}>{metrics.streak.value}</div>
        </div>
        <div className={`${styles.iconContainer} ${styles.iconStreakBg}`}>
          <Calendar className={`${styles.icon} ${styles.iconStreak}`} />
        </div>
      </div>

      {/* Current Phase */}
      <div className={styles.metricCard}>
        <div>
          <div className={styles.metricLabel}>{metrics.phase.label}</div>
          <div className={styles.metricNumber}>{metrics.phase.value}</div>
        </div>
        <div className={`${styles.iconContainer} ${styles.iconPhaseBg}`}>
          <TrendingUp className={`${styles.icon} ${styles.iconPhase}`} />
        </div>
      </div>
    </div>
  );
}