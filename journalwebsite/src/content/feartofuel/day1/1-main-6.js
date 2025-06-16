'use client';

import React, { useState, useCallback, useEffect } from 'react';
import styles from '../../../app/feartofuel/styles/fear_to_fuel.module.css';
import {
  ArrowRight,
  Star,
  Clock,
  Users,
  Coins,
  CheckCircle2,
  Eye,
  Loader2,
} from 'lucide-react';


export default function Day1Main6({
  answers,
  onContinue,
  aiResponse,
  aiLoading,
  aiError,
}) {
  const [showAnalysis, setShowAnalysis] = useState(false);
  const [categories, setCategories] = useState(null);
  const [analysisText, setAnalysisText] = useState('');

  // Parse AI response into categories & analysis text whenever response changes
  useEffect(() => {
    if (!aiResponse) return;

    const text = aiResponse.trim();
    const fenceRegex = /^```(?:json)?\s*([\s\S]*?)```/i;
    let jsonString = '';
    let remainder = text;
    const fenceMatch = fenceRegex.exec(text);

    if (fenceMatch) {
      jsonString = fenceMatch[1].trim();
      remainder = text.slice(fenceMatch[0].length).trim();
    } else {
      const analysisStart = text.indexOf('Based on the fears');
      if (analysisStart !== -1) {
        jsonString = text.slice(0, analysisStart).trim();
        remainder = text.slice(analysisStart).trim();
      } else {
        jsonString = text;
        remainder = '';
      }
    }

    let parsed = null;
    try {
      parsed = JSON.parse(jsonString);
    } catch (err) {
      console.error('Failed to parse AI JSON:', err, jsonString);
    }

    setCategories(parsed);
    setAnalysisText(remainder);
  }, [aiResponse]);

  const handleNext = useCallback(() => onContinue(), [onContinue]);

  // Loading state
  if (aiLoading) {
    return (
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
        <h2 className={styles.title}>Analyzing Your Fears</h2>
        <p className={styles.introduction}>
          I'm processing your fears to create a meaningful fear map. This will help us understand patterns in your thinking.
        </p>
      </div>
    );
  }

  // Error state
  if (aiError) {
    return (
      <div className={styles.mainContent}>
        <p className="text-red-500 mt-4">{aiError}</p>
      </div>
    );
  }

  // Category definitions
  const categoryInfo = [
    { key: 'Core Fears', icon: Star, title: 'Core Fears (The "I AM" Fears)' },
    { key: 'Project-Specific Fears', icon: Clock, title: 'Project-Specific Fears' },
    { key: 'External Fears', icon: Users, title: 'External Fears' },
    { key: 'Resource Fears', icon: Coins, title: 'Resource Fears' },
    { key: 'Identity Fears', icon: CheckCircle2, title: 'Identity Fears' },
  ];

  return (
    <div className={styles.mainContent}>
      <div className={styles.header}>
        <h1 className={styles.title}>Your Fear Map</h1>
        <p className={styles.introduction}>
          I've organized your fears into categories to help identify patterns.
        </p>
      </div>

      {/* Categories grid */}
      <div className={styles.fearCategories}>
        {categoryInfo.map(({ key, icon: Icon, title }) => (
          <div key={key} className={styles.fearCard}>
            <div className={styles.fearCardHeader}>
              <Icon className={styles.fearCardIcon} />
              <h2 className={styles.fearCardTitle}>{title}</h2>
            </div>
            <div className={styles.fearExamples}>
              {categories && Array.isArray(categories[key]) && categories[key].length > 0 ? (
                categories[key].map((fear, i) => <p key={i}>"{fear}"</p>)
              ) : (
                <p>No fears categorized here.</p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Reveal Pattern Analysis */}
      {!showAnalysis && (
        <div className={styles.revealButtonContainer}>
          <button
            className={`${styles.primaryButton} ${styles.withIcon}`}
            onClick={() => setShowAnalysis(true)}
          >
            Reveal Pattern Analysis <Eye size={20} />
          </button>
        </div>
      )}

      {/* Analysis & Next */}
      {showAnalysis && (
        <>
          <div className={`${styles.analysisContainer} ${styles.visible}`}>
            <div className={styles.analysisSection}>
              <h2 className={styles.analysisTitle}>AI Pattern Analysis:</h2>
              <p className={styles.analysisIntro} style={{ whiteSpace: 'pre-line' }}>
                {analysisText}
              </p>
            </div>
            <div className={`${styles.calloutBox} ${styles.successBox}`} style={{ marginBottom: '20px' }}>
              <div className={styles.successHeader}>
                <CheckCircle2 className={styles.successIcon} />
                <span>Congratulations on mapping your fears!</span>
              </div>
              <p>
                By bringing these fears into the light, you've taken the first step toward transforming them.
                Tomorrow, we'll explore where these fears originated to understand their source.
              </p>
            </div>
          </div>
          <div className={styles.actionButtons}>
            <button
              className={`${styles.primaryButton} ${styles.withIcon}`}
              onClick={handleNext}
            >
              Continue to Final Reflection <ArrowRight size={20} />
            </button>
          </div>
        </>
      )}
    </div>
  );
}
