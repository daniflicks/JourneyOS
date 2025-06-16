'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import styles from '../styles/fear_to_fuel.module.css';
import { useJourneyRouting } from '../../../hooks/journeyHooks';

export default function ExerciseLayout({ children, showHeader = true, showFooter = true }) {
  const { dayNum, pages, pageId, prevPageId, progress } = useJourneyRouting();

  // Hydration guard for SSR
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => { setHydrated(true); }, []);

  // Compute display progress (guards hydration)
  const displayProgress = hydrated ? progress : 0;

  // Compute back link
  const previousPath = prevPageId
    ? `/feartofuel/${dayNum}/${prevPageId}`
    : '/dashboard';

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.container}>

        {showHeader && (
          <div className={styles.progressContainer}>
            <div className={styles.progressLabels}>
              <span className={styles.progressLabel}>Power-Up</span>
              <span className={styles.progressLabel}>Main Exercise</span>
              <span className={styles.progressLabel}>Reflection</span>
            </div>
            <div className={styles.progressBar}>
              <div
                className={styles.progressFill}
                style={{ width: `${displayProgress}%` }}
              />
            </div>
          </div>
        )}

        {children}

        {showFooter && (
          <div className={styles.footer}>
            <Link href={previousPath} className={styles.footerLink}>
              <ArrowLeft size={20} /> Back
            </Link>
            <div className={styles.footerCenter} />
            <Link href="/support" className={styles.footerLink}>
              Need Support?
            </Link>
          </div>
        )}

      </div>
    </div>
  );
}
