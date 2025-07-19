'use client';

import React, { useCallback, useState } from 'react';
import styles from '../../../app/feartofuel/styles/fear_to_fuel.module.css';
import { ArrowRight } from 'lucide-react';
import { useJourneyStore } from '../../../store/journeyStore';

export default function Day5Main1({ answers, onChange, onContinue, aiResponse, aiLoading, aiError }) {
  const [showAnalysis, setShowAnalysis] = useState(false);

  // Prefer latest refined draft if available; fallback to original AI feedback
  const analysisText = aiResponse || answers?.beliefAnalysisDraft || answers?.beliefAnalysisFeedback || '';

  // ─── UI STATES ──────────────────────────────────────────────────────────────
  const hasContent   = analysisText && analysisText.trim().length > 0;
  const isProcessing = aiLoading || (!aiError && !hasContent);

  // Continue handler matching Day 4 pattern
  const handleNext = useCallback(() => onContinue(), [onContinue]);
  // Navigate to optional belief-exploration page when user isn't satisfied
  const handleRefine = useCallback(() => onContinue('5-main-1-explore'), [onContinue]);

  if (isProcessing) {
    return (
      <div className={styles.mainContent}>
        <div className={styles.flowerContainer}>
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className={styles.petal} style={{ '--rotation': `${i * 45}deg` }}></div>
          ))}
        </div>
        <h2 className={styles.title}>Mapping Your Beliefs…</h2>
        <p className={styles.introduction}>Coco is synthesizing everything you've shared so far.</p>
      </div>
    );
  }

  return (
    <div className={styles.mainContent}>
      <div className={styles.header}>
        <h1 className={styles.title}>Belief Analysis</h1>
        <p className={styles.introductionMargin}>
          Based on your work this week, AI has identified patterns in your fears. <br />Let's see what rules you've been living by without realizing it.
        </p>
      </div>

      {/* Error state (loader handled above) */}
      {aiError && <p className="text-red-500 mt-4">{aiError}</p>}

      {/* Reveal button */}
      {!aiLoading && hasContent && !showAnalysis && (
        <div className={styles.revealButtonContainer}>
          <button
            className={`${styles.primaryButton} ${styles.withIcon}`}
            onClick={() => setShowAnalysis(true)}
          >
            Ready to see your analysis <ArrowRight size={20} />
          </button>
        </div>
      )}

      {/* Display analysis cards when revealed */}
      {!aiLoading && hasContent && showAnalysis && (
        <div className={styles.fearCategories}>
          {(() => {
            const lines = analysisText.split(/\r?\n/).filter(l => l.trim());
            const cards = [];
            let current = [];
            lines.forEach(line => {
              if (/^\d+\./.test(line)) {
                if (current.length) cards.push(current);
                current = [line];
              } else if (current.length) {
                current.push(line);
              }
            });
            if (current.length) cards.push(current);

            // Fallback: if no numbered headings detected, treat entire response as one card
            if (cards.length === 0) {
              cards.push(lines);
            }

            return cards.map((card, i) => (
              <div key={i} className={styles.fearCard}>
                {card.map((text, idx) => {
                  // Remove surrounding quotes everywhere; strip leading numbers only for the first line (the belief itself)
                  const cleaned = (idx === 0
                    ? text.replace(/^\d+\.\s*/, '') // drop list index like "1. "
                    : text
                  ).replace(/[\"“”]/g, '');

                  // Bold the primary belief line for emphasis
                  return (
                    <p key={idx} style={idx === 0 ? { fontWeight: 'bold' } : {}}>
                      {cleaned}
                    </p>
                  );
                })}
              </div>
            ));
          })()}
        </div>
      )}

      {/* Feedback buttons and Continue */}
      {!aiLoading && hasContent && showAnalysis && (
        <>
          <div className={styles.helperButtons} style={{ marginTop: '24px', gap: '12px', justifyContent: 'center' }}>
            <button
              className={styles.primaryButton}
              style={{ flex: 1 }}
              onClick={handleNext}
              disabled={aiLoading}
            >
              Yes, that hits home <ArrowRight size={20} />
            </button>
            <button
              className={styles.secondaryButton}
              style={{ flex: 1 }}
              onClick={handleRefine}
            >
              Not quite
            </button>
          </div>
        </>
      )}
    </div>
  );
}