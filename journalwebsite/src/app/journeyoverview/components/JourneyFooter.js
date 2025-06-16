'use client';

import Link from 'next/link';
import { useDashboardData } from '../../../hooks/journeyHooks';
import PAGE_MAP from '../../../config/pageMap';
import styles from '../styles/journeyoverview.module.css';

export default function JourneyFooter() {
  const { currentDay, resumePage } = useDashboardData();

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

  const continueLink = `/feartofuel/${currentDay}/${targetPage}`;
  
  return (
    <div className={styles.footer}>
      <Link href={continueLink} className={styles.continueButton}>
        {resumePageId ? 'Continue Your Journey' : 'Begin Your Journey'}
      </Link>
    </div>
  );
} 