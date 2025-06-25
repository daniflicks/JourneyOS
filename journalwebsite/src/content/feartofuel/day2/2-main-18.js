'use client';

import React, { useCallback, useEffect } from 'react';
import styles from '../../../app/feartofuel/styles/fear_to_fuel.module.css';
import { ArrowRight, MessageSquare, Sparkles } from 'lucide-react';

export default function Day2Main18({
  answers,
  onChange,
  onContinue,
  aiResponse,
  aiLoading,
  aiError,
}) {
  const handleNext = useCallback(() => onContinue(), [onContinue]);

  // Enhanced aggregation with depth analysis for better reframing suggestions
  useEffect(() => {
    const lessonsInputs = {
      career: answers.lessonsFromFirstMemory || '',
      mostPainful: answers.lessonsFromMostPainfulMemory || '',
      mostRecent: answers.lessonsFromMostRecentMemory || ''
    };

    // Check if we have all three inputs
    const hasAllInputs = Object.values(lessonsInputs).every(input => input.trim().length > 0);
    
    if (hasAllInputs) {
      // Format for enhanced analysis including depth assessment
      const enhancedAnalysis = `LESSONS FROM EXPERIENCES:

Career Experience Lessons:
${lessonsInputs.career}

Most Painful Experience Lessons:
${lessonsInputs.mostPainful}

Most Recent Experience Lessons:
${lessonsInputs.mostRecent}

ANALYSIS REQUEST: Please provide a comprehensive wisdom integration analysis. If any of these lessons seem surface-level or could benefit from deeper reframing, suggest additional perspectives that might help the user discover more profound insights about their resilience, growth, and strength.`;

      // Only trigger if content has changed
      if (enhancedAnalysis !== answers.lessonsReframingAnalysis) {
        onChange('lessonsReframingAnalysis', enhancedAnalysis);
      }
    }
  }, [
    answers.lessonsFromFirstMemory,
    answers.lessonsFromMostPainfulMemory,
    answers.lessonsFromMostRecentMemory,
    answers.lessonsReframingAnalysis,
    onChange,
  ]);

  return (
    <div className={styles.mainContent}>
      {!aiLoading && (
        <div className={styles.header}>
          <h1 className={styles.title}>Wisdom Integration & Deeper Reframing</h1>
          <p className={styles.introductionMargin}>
            Let's celebrate the wisdom you've discovered and explore if there are even deeper insights waiting to be uncovered.
          </p>
        </div>
      )}

      {/* Show user's inputs for context */}
      {!aiLoading && !aiError && (
        <div className={styles.calloutBox} style={{ marginBottom: '20px' }}>
          <h3 className={styles.promptsTitle}>Your Lessons Learned:</h3>
          {answers.lessonsFromFirstMemory && (
            <div style={{ marginBottom: '15px' }}>
              <strong>From your career experience:</strong>
              <p style={{ marginTop: '5px' }}>{answers.lessonsFromFirstMemory}</p>
            </div>
          )}
          {answers.lessonsFromMostPainfulMemory && (
            <div style={{ marginBottom: '15px' }}>
              <strong>From your most painful experience:</strong>
              <p style={{ marginTop: '5px' }}>{answers.lessonsFromMostPainfulMemory}</p>
            </div>
          )}
          {answers.lessonsFromMostRecentMemory && (
            <div style={{ marginBottom: '15px' }}>
              <strong>From your most recent experience:</strong>
              <p style={{ marginTop: '5px' }}>{answers.lessonsFromMostRecentMemory}</p>
            </div>
          )}
        </div>
      )}

      {aiLoading && (
        <div className={styles.mainContent}>
          <div className={styles.flowerContainer}>
            <div className={styles.petal} style={{ '--rotation': '0deg' }}></div>
            <div className={styles.petal} style={{ '--rotation': '45deg' }}></div>
            <div className={styles.petal} style={{ '--rotation': '90deg' }}></div>
            <div className={styles.petal} style={{ '--rotation': '135deg' }}></div>
            <div className={styles.petal} style={{ '--rotation': '180deg' }}></div>
            <div className={styles.petal} style={{ '--rotation': '225deg' }}></div>
            <div className={styles.petal} style={{ '--rotation': '270deg' }}></div>
            <div className={styles.petal} style={{ '--rotation': '315deg' }}></div>
          </div>
          <h2 className={styles.title}>Integrating Your Wisdom</h2>
          <p className={styles.introduction}>
            Coco is weaving together all the wisdom you've discovered and exploring deeper reframings that might unlock even more profound insights.
          </p>
        </div>
      )}

      {aiError && (
        <div className={styles.calloutBox} style={{ borderColor: '#EF4444', backgroundColor: '#FEE2E2' }}>
          <p style={{ color: '#DC2626' }}>Unable to generate analysis: {aiError}</p>
        </div>
      )}

      {!aiLoading && !aiError && aiResponse && (
        <div className={styles.aiAnalysisCard}>
          <div className={styles.aiHeader}>
            <div className={styles.aiIconContainer}>
              <Sparkles className={styles.aiIcon} />
            </div>
            <div className={styles.aiInfo}>
              <h2 className={styles.aiName}>Your Wisdom Foundation & Deeper Insights</h2>
              <p className={styles.aiRole}>From Coco, your guide</p>
            </div>
          </div>
          <div className={styles.aiMessage}>
            <div className="whitespace-pre-wrap">{aiResponse}</div>
          </div>
        </div>
      )}

      {!aiLoading && (
        <div className={styles.actionButtons}>
          <button
            className={`${styles.primaryButton} ${styles.withIcon}`}
            onClick={handleNext}
            disabled={aiLoading}
          >
            Continue to Reflection <ArrowRight size={20} />
          </button>
        </div>
      )}
    </div>
  );
} 