'use client';

import { useCallback } from 'react';
import styles from '../../../app/feartofuel/styles/fear_to_fuel.module.css';
import { ArrowRight, MessageSquare } from 'lucide-react';

export default function Day5Reflection2({ answers, onContinue, aiResponse, aiLoading, aiError }) {
  const reflection = answers.reflectionResponse || 'No reflection provided.';

  const handleNext = useCallback(() => onContinue(), [onContinue]);

  return (
    <div className={styles.mainContent}>
      <h1 className={styles.title}>Your Reflection</h1>
      <p className={styles.introduction}>Thank you for sharing your thoughts.</p>

      <div className={styles.calloutBox}>{reflection}</div>

      {aiLoading && (
        <div className={styles.aiLoading}>
          <span>Coco is reflecting on your response</span>
          <div className={styles.loadingDots}>
            <div className={styles.loadingDot}></div>
            <div className={styles.loadingDot}></div>
            <div className={styles.loadingDot}></div>
          </div>
        </div>
      )}
      {aiError && <p className="text-red-500 mt-4">{aiError}</p>}
      {!aiLoading && !aiError && aiResponse && (
        <div className={styles.aiAnalysisCard}>
          <div className={styles.aiHeader}>
            <div className={styles.aiIconContainer}><MessageSquare className={styles.aiIcon}/></div>
            <div className={styles.aiInfo}>
              <h2 className={styles.aiName}>From Coco, your guide</h2>
              <p className={styles.aiRole}>AI support companion</p>
            </div>
          </div>
          <div className={styles.aiMessage}><p className="whitespace-pre-wrap">{aiResponse}</p></div>
        </div>
      )}

      <div className={styles.actionButtons}>
        <button className={`${styles.primaryButton} ${styles.withIcon}`} onClick={handleNext} disabled={aiLoading}>
          Continue to Complete Day 5 <ArrowRight size={20}/>
        </button>
      </div>
    </div>
  );
} 