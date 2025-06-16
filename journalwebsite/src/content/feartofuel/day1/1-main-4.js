'use client';

import React, { useCallback } from 'react';
import styles from '../../../app/feartofuel/styles/fear_to_fuel.module.css';
import { ArrowRight, CheckCircle2, MessageSquare } from 'lucide-react';


export default function Day1Main4({
  answers,
  onContinue,
  aiResponse,
  aiLoading,
  aiError,
}) {
  const projectVision = answers.projectVision || 'No vision provided.';
  const motivation    = answers.projectMotivation || 'No motivation provided.';
  const handleNext    = useCallback(() => onContinue(), [onContinue]);

  return (
    <div className={styles.mainContent}>
      <div className={styles.header}>
        <h1 className={styles.title}>Your Motivation</h1>
        <p className={styles.introduction}>
          This will be your anchor when challenges arise.
        </p>
      </div>

      <div className={styles.calloutBox} style={{ marginBottom: '20px' }}>
        <h3 className={styles.formLabelBold}>Your project:</h3>
        <p className="whitespace-pre-wrap">{projectVision}</p>

        <h3 className={styles.formLabelBold} style={{ marginTop: '30px' }}>Your motivation:</h3>
        <p className={`whitespace-pre-wrap`}>{motivation}</p>
      </div>

      <div className={`${styles.calloutBox} ${styles.successBox}`}>
        <div className={styles.successHeader}>
          <CheckCircle2 className={styles.successIcon} />
          <span>Great job sharing your motivation!</span>
        </div>

        <p>
          Taking the time to reflect on why you're pursuing this project is an important step.&nbsp;
          This "why" will be your anchor when challenges arise.
        </p>
      </div>

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
      {aiError && (
        <p className="text-red-500 mt-4">{aiError}</p>
      )}
      {!aiLoading && !aiError && aiResponse && (
        <div className={styles.aiAnalysisCard}>
          <div className={styles.aiHeader}>
            <div className={styles.aiIconContainer}>
              <MessageSquare className={styles.aiIcon} />
            </div>
            <div className={styles.aiInfo}>
              <h2 className={styles.aiName}>From Coco, your guide</h2>
              <p className={styles.aiRole}>AI support companion</p>
            </div>
          </div>
          <div className={styles.aiMessage}>
            <p className="whitespace-pre-wrap">{aiResponse}</p>
          </div>
        </div>
      )}

      <div className={styles.actionButtons}>
        <button
          className={`${styles.primaryButton} ${styles.withIcon}`}
          onClick={handleNext}
          disabled={aiLoading}
        >
          Continue to Fear Collection <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
}
