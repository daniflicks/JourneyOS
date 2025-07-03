'use client';

import React, { useEffect, useCallback, useState } from 'react';
import styles from '../../../app/feartofuel/styles/fear_to_fuel.module.css';
import { ArrowRight } from 'lucide-react';
import { useJourneyStore } from '../../../store/journeyStore';
import { SECTION_TYPES } from '../../../constants/journeyConstants';

export default function Day5Main1({ answers, onChange, onContinue, aiResponse, aiLoading, aiError }) {
  const [showAnalysis, setShowAnalysis] = useState(false);
  const userInputs  = useJourneyStore((s) => s.userInputs);
  const userMemory  = useJourneyStore((s) => s.userMemory);

  // Pull rich fields from previous days -------------------------------------------------
  const fearDump              = userInputs[1]?.[SECTION_TYPES.MAIN_EXERCISE]?.fearDump || [];
  const patternText           = userInputs[4]?.[SECTION_TYPES.MAIN_EXERCISE]?.hiddenPatternTrigger || '';
  const earlyMsgs             = userInputs[2]?.[SECTION_TYPES.MAIN_EXERCISE]?.combinedEarlyMessages || '';
  const firstFailure          = userInputs[2]?.[SECTION_TYPES.MAIN_EXERCISE]?.combinedCareerFailure || '';
  const painfulFailure        = userInputs[2]?.[SECTION_TYPES.MAIN_EXERCISE]?.combinedMostPainfulFailure || '';
  const recentFailure         = userInputs[2]?.[SECTION_TYPES.MAIN_EXERCISE]?.mostRecentFailureReflection || '';
  const lessonsLearned        = userInputs[2]?.[SECTION_TYPES.MAIN_EXERCISE]?.lessonsReframingAnalysis || '';

  // Aggregate into one payload for Claude ----------------------------------------------
  useEffect(() => {
    const sections = [
      fearDump.length ? `Fear Dump:\n${fearDump.filter(Boolean).join('\n')}` : '',
      patternText ? `Pattern Insight:\n${patternText}` : '',
      earlyMsgs ? `Early Messages:\n${earlyMsgs}` : '',
      firstFailure ? `First Failure:\n${firstFailure}` : '',
      painfulFailure ? `Most Painful Failure:\n${painfulFailure}` : '',
      recentFailure ? `Most Recent Failure:\n${recentFailure}` : '',
      lessonsLearned ? `Lessons Learned:\n${lessonsLearned}` : '',
      userMemory ? `Prior Insights:\n${userMemory}` : '',
    ].filter(Boolean).join('\n\n');

    if (sections && sections !== answers.beliefAnalysisTrigger) {
      onChange('beliefAnalysisTrigger', sections);
    }
  }, [fearDump, patternText, earlyMsgs, firstFailure, painfulFailure, recentFailure, lessonsLearned, userMemory, answers.beliefAnalysisTrigger, onChange]);

  // ─── UI STATES ──────────────────────────────────────────────────────────────
  const hasContent   = aiResponse && aiResponse.trim().length > 0;
  const isProcessing = aiLoading || (!aiError && !hasContent);

  // Continue handler matching Day 4 pattern
  const handleNext = useCallback(() => onContinue(), [onContinue]);

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
            const lines = aiResponse.split(/\r?\n/).filter(l => l.trim());
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
                  ).replace(/["“”]/g, '');

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
            >
              Not quite
            </button>
          </div>
        </>
      )}
    </div>
  );
}