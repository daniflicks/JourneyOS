'use client';

import React, { useState, useCallback } from 'react';
import styles from '../../../app/feartofuel/styles/fear_to_fuel.module.css';
import { ArrowRight, HelpCircle } from 'lucide-react';

export default function Day5Main5({ answers, onChange, onContinue }) {
  const beliefPayoff = answers?.beliefPayoffReflection || '';
  const [showPrompts, setShowPrompts] = useState(false);

  const handleChange = useCallback(
    (e) => onChange('beliefPayoffReflection', e.target.value),
    [onChange]
  );

  const handleNext = useCallback(() => onContinue(), [onContinue]);

  return (
    <div className={styles.mainContent}>
      <div className={styles.header}>
        <h1 className={styles.title}>The Payoff Question</h1>
        <p className={styles.introduction} style={{ marginBottom: '32px' }}>
          What does this belief protect you from?
        </p>
      </div>

      {/* Prompt before textarea */}
      <div className={styles.formSection}>
        <label htmlFor="beliefPayoff" className={styles.formLabel} style={{ marginTop: '16px' }}>
          Even limiting beliefs serve us somehow. What does yours help you avoid?
        </label>
        <textarea
          id="beliefPayoff"
          className={styles.textInput}
          placeholder="Ex: Feeling vulnerable to criticism, risking rejection, facing potential failure…"
          rows={5}
          value={beliefPayoff}
          onChange={handleChange}
        />

        <div className={styles.helperButtons} style={{ marginTop: '-10px' }}>
          <button className={styles.textButton} onClick={() => setShowPrompts(!showPrompts)}>
            <HelpCircle size={16} /> Stuck? See examples
          </button>
        </div>

        {showPrompts && (
          <div className={styles.calloutBox}>
            <h3 className={styles.promptsTitle}>Examples:</h3>
            <p>
              • Avoiding situations where I might be judged.<br />
              • Shielding me from taking risks that could fail.<br />
              • Keeping me in my comfort zone so I don't feel exposed.<br />
              • Preventing the disappointment of unmet expectations.
            </p>
          </div>
        )}
      </div>

      <div className={styles.actionButtons}>
        <button
          className={`${styles.primaryButton} ${styles.withIcon}`}
          onClick={handleNext}
          disabled={!beliefPayoff.trim()}
        >
          Continue <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
} 