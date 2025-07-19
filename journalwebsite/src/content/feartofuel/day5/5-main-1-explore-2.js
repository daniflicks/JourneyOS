'use client';

import React, { useCallback, useState } from 'react';
import styles from '../../../app/feartofuel/styles/fear_to_fuel.module.css';
import { ArrowRight } from 'lucide-react';

export default function Day5Main1Explore2({ answers, onChange, onContinue }) {
  // Local state synced with store‐backed answers
  const [first,  setFirst]  = useState(answers?.exploreSentence1 || '');
  const [second, setSecond] = useState(answers?.exploreSentence2 || '');
  const [third,  setThird]  = useState(answers?.exploreSentence3 || '');

  const handleChange = useCallback(
    (setter, key) => (e) => {
      const value = e.target.value;
      setter(value);
      onChange && onChange(key, value);
      // Update combined belief exploration text for AI on every change
      const beliefText = (
        answers?.beliefAnalysisDraft || answers?.beliefAnalysisFeedback || ''
      ).trim();
      const updated = [beliefText, key === 'exploreSentence1' ? value : first,
                       key === 'exploreSentence2' ? value : second,
                       key === 'exploreSentence3' ? value : third]
        .filter(Boolean)
        .join('\n');
      onChange && onChange('beliefExplorationCombined', updated);
    },
    [onChange, answers?.beliefAnalysisFeedback, first, second, third]
  );

  const handleNext = useCallback(() => {
    if (!first.trim() || !second.trim() || !third.trim()) return;
    // Ensure combined text saved
    const combined = [
      answers?.beliefAnalysisDraft || answers?.beliefAnalysisFeedback || '',
      first,
      second,
      third,
    ]
      .filter(Boolean)
      .join('\n');
    onChange && onChange('beliefExplorationCombined', combined);
    onContinue(); // proceeds to next page (refined analysis)
  }, [first, second, third, onChange, onContinue, answers?.beliefAnalysisFeedback]);

  return (
    <div className={styles.mainContent}>
      <div className={styles.header}>
        <h1 className={styles.title}>Complete the Sentence</h1>
        <p className={styles.introduction}>Finish these quickly – first thought that pops in.</p>
      </div>

      <div className={styles.formSection}>
        <label className={styles.formLabel} style={{ marginTop: '16px' }}>
          "I can't start until I _________"
        </label>
        <textarea
          value={first}
          onChange={handleChange(setFirst, 'exploreSentence1')}
          className={styles.textInput}
          placeholder="Type the first thought that comes up…"
          rows={2}
        />
      </div>

      <div className={styles.formSection} style={{ marginTop: '0px' }}>
        <label className={styles.formLabel}>"People like me don't _________"</label>
        <textarea
          value={second}
          onChange={handleChange(setSecond, 'exploreSentence2')}
          className={styles.textInput}
          placeholder="Type the first thought that comes up…"
        />
      </div>

      <div className={styles.formSection} style={{ marginTop: '0px' }}>
        <label className={styles.formLabel}>"If I fail, it means I'm _________"</label>
        <textarea
          value={third}
          onChange={handleChange(setThird, 'exploreSentence3')}
          className={styles.textInput}
          placeholder="Type the first thought that comes up…"
        />
      </div>

      <div className={styles.actionButtons}>
        <button
          className={`${styles.primaryButton} ${styles.withIcon}`}
          onClick={handleNext}
          disabled={!first.trim() || !second.trim() || !third.trim()}
        >
          Continue <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
} 