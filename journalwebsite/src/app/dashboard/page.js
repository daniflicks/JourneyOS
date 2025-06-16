'use client';

import React from 'react';
import styles from './styles/dashboard.module.css';
import FearJournalCard from './components/FearJournalCard';

export default function DashboardPage() {
  // Get current date in a nice format
  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className={styles.container}>
      <div className={styles.welcomeSection}>
        <h1 className={styles.welcomeTitle}>Welcome back, Alya!</h1>
        <p className={styles.dateText}>{currentDate}</p>
      </div>
      <FearJournalCard />
    </div>
  );
} 