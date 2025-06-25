'use client';

import React, { useCallback, useEffect } from 'react';
import styles from '../../../app/feartofuel/styles/fear_to_fuel.module.css';
import { ArrowRight, MessageSquare } from 'lucide-react';

export default function Day2Main7({
  answers,
  onChange,
  onContinue,
  aiResponse,
  aiLoading,
  aiError,
}) {
  const careerFailureStory = answers.careerFailureStory || 'No story provided.';
  const careerFailureAge = answers.careerFailureAge || 'Not specified';
  const othersReactionReflection = answers.othersReactionReflection || 'No reflection provided.';
  const selfDecisionReflection = answers.selfDecisionReflection || 'No reflection provided.';
  const handleNext = useCallback(() => onContinue(), [onContinue]);

  // Combine career failure inputs for AI analysis (like working examples)
  useEffect(() => {
    const combinedInput = `Career Failure Story: ${careerFailureStory}\n\nAge: ${careerFailureAge}\n\nOthers' Reactions: ${othersReactionReflection}\n\nSelf Decisions: ${selfDecisionReflection}`;
    
    // Only trigger if we have all inputs and it's different from current combined value
    if (careerFailureStory.trim() && othersReactionReflection.trim() && selfDecisionReflection.trim() && combinedInput !== answers.combinedCareerFailure) {
      onChange('combinedCareerFailure', combinedInput);
    }
  }, [careerFailureStory, careerFailureAge, othersReactionReflection, selfDecisionReflection, answers.combinedCareerFailure, onChange]);

  return (
    <div className={styles.mainContent}>
      <div className={styles.header}>
        <h1 className={styles.title}>Your First Career Setback</h1>
        <p className={styles.introduction}>
          Here's some insight on this significant experience.
        </p>
      </div>

      <div className={styles.calloutBox} style={{ marginBottom: '20px' }}>
        <h3 className={styles.formLabelBold}>What Happened:</h3>
        <p className="whitespace-pre-wrap">{careerFailureStory}</p>
        <p><strong>Age:</strong> {careerFailureAge}</p>

        <h3 className={styles.formLabelBold} style={{ marginTop: '30px' }}>Others' Reactions:</h3>
        <p className="whitespace-pre-wrap">{othersReactionReflection}</p>

        <h3 className={styles.formLabelBold} style={{ marginTop: '30px' }}>What You Decided About Yourself:</h3>
        <p className="whitespace-pre-wrap">{selfDecisionReflection}</p>
      </div>

      {aiLoading && (
        <div className={styles.aiLoading}>
          <span>Coco is reflecting on your career experience</span>
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
          Continue to Next Section <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
} 