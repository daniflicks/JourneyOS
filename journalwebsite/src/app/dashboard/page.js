'use client';

import React, { useState, useEffect } from 'react';
import styles from './styles/dashboard.module.css';
import FearJournalCard from './components/FearJournalCard';

export default function DashboardPage() {
  // Hydration guard for SSR
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => { setHydrated(true); }, []);

  // Get current date in a nice format (guard with hydration check)
  const currentDate = hydrated ? new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }) : '';

  return (
    <div className={styles.container}>
      <div className={styles.welcomeSection}>
        <h1 className={styles.welcomeTitle}>Welcome back, Alya!</h1>
        {hydrated && <p className={styles.dateText}>{currentDate}</p>}
      </div>
      <FearJournalCard hydrated={hydrated} />
    </div>
  );
} 