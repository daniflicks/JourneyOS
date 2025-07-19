'use client';

import CheckInList from '../../../app/feartofuel/components/CheckInList';
import styles from '../../../app/feartofuel/styles/fear_to_fuel.module.css';
import { useEffect } from 'react';
import { useJourneyStore } from '../../../store/journeyStore';
import { SECTION_TYPES } from '../../../constants/journeyConstants';

const checkInItems = [
  { id: 'ready', label: 'Ready to question everything' },
  { id: 'defensive', label: 'Defensive - my beliefs keep me safe' },
  { id: 'curious', label: 'Curious but skeptical' },
  { id: 'worried', label: "Worried what I'll find" },
  { id: 'justFacts', label: 'These ARE just facts about me' },
];

export default function Day5CheckIn2({ answers, onChange, onContinue }) {
  const userInputs = useJourneyStore((s) => s.userInputs);
  const userMemory = useJourneyStore((s) => s.userMemory);

  useEffect(() => {
    const fearDump       = userInputs[1]?.[SECTION_TYPES.MAIN_EXERCISE]?.fearDump || [];
    const patternText    = userInputs[4]?.[SECTION_TYPES.MAIN_EXERCISE]?.hiddenPatternTrigger || '';
    const earlyMsgs      = userInputs[2]?.[SECTION_TYPES.MAIN_EXERCISE]?.combinedEarlyMessages || '';
    const firstFailure   = userInputs[2]?.[SECTION_TYPES.MAIN_EXERCISE]?.combinedCareerFailure || '';
    const painfulFailure = userInputs[2]?.[SECTION_TYPES.MAIN_EXERCISE]?.combinedMostPainfulFailure || '';
    const recentFailure  = userInputs[2]?.[SECTION_TYPES.MAIN_EXERCISE]?.mostRecentFailureReflection || '';
    const lessonsLearned = userInputs[2]?.[SECTION_TYPES.MAIN_EXERCISE]?.lessonsReframingAnalysis || '';

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

    if (!sections) return;

    const store = useJourneyStore.getState();
    store.saveUserInput(5, SECTION_TYPES.MAIN_EXERCISE, { beliefAnalysisTrigger: sections });

    const cacheKey = `claude-5-${SECTION_TYPES.MAIN_EXERCISE}-1-${encodeURIComponent(sections)}`;
    if (localStorage.getItem(cacheKey)) return;

    fetch('/api/claudeFeedback', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ day: 5, promptIndex: 1, userText: sections, userMemory }),
    })
      .then((res) => res.json())
      .then((data) => {
        const aiText = data.aiText ?? data.feedback ?? '';
        localStorage.setItem(cacheKey, aiText);
        store.saveUserInput(5, SECTION_TYPES.MAIN_EXERCISE, { beliefAnalysisFeedback: aiText });
      })
      .catch(console.error);
  }, []);

  const selectedItems = answers?.selectedItems || [];

  return (
    <div className={styles.powerUpContainer}>
      <div className={styles.header}>
        <h2 className={styles.checkInTitle}>Quick Check-In</h2>
        <p className={styles.checkInQuestion}>How are you feeling about examining your beliefs?</p>
      </div>

      <CheckInList
        items={checkInItems}
        selectedItems={selectedItems}
        onChange={(newSelected) => onChange('selectedItems', newSelected)}
      />

      {Array.isArray(selectedItems) && selectedItems.length > 0 && (
        <div className={styles.calloutBox}>
          Noticing your initial reaction helps you approach this work with honesty. Whatever you feel is a valid starting point.
        </div>
      )}

      <div className={styles.actionButtons}>
        <button
          type="button"
          onClick={() => onContinue('5-checkin-3')}
          className={styles.primaryButton}
          style={{ marginBottom: '24px' }}
        >
          Start Guided Breathing Exercise → (45 seconds)
        </button>
        <button
          type="button"
          onClick={() => onContinue('5-main-1')}
          className={styles.secondaryButton}
        >
          Skip to Main Exercise
        </button>
      </div>
    </div>
  );
} 