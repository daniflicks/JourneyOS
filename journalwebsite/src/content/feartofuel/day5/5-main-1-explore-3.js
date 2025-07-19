'use client';

import React, { useState, useCallback } from 'react';
import styles from '../../../app/feartofuel/styles/fear_to_fuel.module.css';
import { ArrowRight } from 'lucide-react';

export default function Day5Main1Explore3({ answers, onContinue, aiResponse, aiLoading, aiError }) {
  // Prefer AI response prop
  const analysisText = aiResponse || answers?.refinedBeliefAnalysisFeedback || '';
  const [showAnalysis, setShowAnalysis] = useState(true); // always show

  const handleYes = useCallback(() => onContinue(), [onContinue]); // goes to 5-main-2 via nextPageId
  const handleRetry = useCallback(() => onContinue('5-main-1-explore'), [onContinue]);

  const isProcessing = aiLoading || (!aiError && !analysisText.trim());

  if (isProcessing) {
    return (
      <div className={styles.mainContent}>
        <div className={styles.flowerContainer}>
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className={styles.petal} style={{ '--rotation': `${i * 45}deg` }}></div>
          ))}
        </div>
        <h2 className={styles.title}>Re-mapping Your Beliefs…</h2>
        <p className={styles.introduction}>Coco is analyzing your latest answers.</p>
      </div>
    );
  }

  return (
    <div className={styles.mainContent}>
      <div className={styles.header}>
        <h1 className={styles.title}>Refined Belief Analysis</h1>
        <p className={styles.introductionMargin}>Based on your new responses, here's what I see:</p>
      </div>

      {/* Error */}
      {aiError && <p className="text-red-500 mt-4">{aiError}</p>}

      {showAnalysis && (
        <div className={styles.fearCategories}>
          {analysisText.split(/\r?\n/).filter(l=>l.trim()).map((line, idx) => (
            <p key={idx} style={{ marginBottom: '8px' }}>{line}</p>
          ))}
        </div>
      )}

      {/* Buttons */}
      <div className={styles.helperButtons} style={{ marginTop: '24px', gap: '12px', justifyContent: 'center' }}>
        <button className={styles.primaryButton} style={{ flex: 1 }} onClick={handleYes} disabled={aiLoading}>
          Yes, much better <ArrowRight size={20} />
        </button>
        <button className={styles.secondaryButton} style={{ flex: 1 }} onClick={handleRetry}>
          Let me try once more
        </button>
      </div>
    </div>
  );
} 