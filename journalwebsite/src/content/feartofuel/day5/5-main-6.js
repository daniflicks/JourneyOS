'use client';

import React, { useState, useCallback } from 'react';
import styles from '../../../app/feartofuel/styles/fear_to_fuel.module.css';
import { ArrowRight, HelpCircle } from 'lucide-react';

export default function Day5Main6({ answers, onChange, onContinue }) {
  const selectedBelief = answers?.selectedBelief || '';
  const exceptionText  = answers?.beliefExceptionReflection || '';
  const [showPrompts, setShowPrompts] = useState(false);

  const handleChange = useCallback(
    (e) => onChange('beliefExceptionReflection', e.target.value),
    [onChange]
  );

  const handleNext = useCallback(() => onContinue(), [onContinue]);

  return (
    <div className={styles.mainContent}>
      <div className={styles.header}>
        <h1 className={styles.title}>Exception Finding</h1>
        <p className={styles.introduction} style={{ marginBottom: '32px' }}>
          Tell me about <strong>one</strong> time this belief wasn&apos;t completely true.
        </p>
      </div>

      {selectedBelief && (
        <div className={styles.calloutBox} style={{ marginBottom: '24px' }}>
          <h3 className={styles.formLabelBold}>Your belief:</h3>
          <p>&quot;{selectedBelief}&quot;</p>
        </div>
      )}

      {/* Guidance card */}
      <div className={styles.fearCard} style={{ marginBottom: '30px' }}>
        <h3 className={styles.promptsTitle}>Think about:</h3>
        <ul className={styles.bulletList}>
          <li>A time you succeeded without the belief's "requirement"</li>
          <li>Someone you know who breaks this rule</li>
          <li>A small exception that challenges it</li>
        </ul>
      </div>

      {/* Textarea */}
      <div className={styles.formSection}>
        <label htmlFor="beliefException" className={styles.formLabel} style={{ marginTop: '16px' }}>
          Describe the exception:
        </label>
        <textarea
          id="beliefException"
          className={styles.textInput}
          placeholder="Ex: I spoke up in a meeting and was praised, even though I felt insecure…"
          rows={5}
          value={exceptionText}
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
              • My friend built a successful business without a formal degree.<br />
              • I delivered a presentation confidently despite feeling unprepared.<br />
              • I asked for help and wasn&apos;t judged like I feared.
            </p>
          </div>
        )}
      </div>

      <div className={styles.actionButtons}>
        <button
          className={`${styles.primaryButton} ${styles.withIcon}`}
          onClick={handleNext}
          disabled={!exceptionText.trim()}
        >
          Continue <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
} 