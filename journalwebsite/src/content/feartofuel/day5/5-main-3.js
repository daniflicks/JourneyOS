'use client';

import React, { useState, useCallback } from 'react';
import styles from '../../../app/feartofuel/styles/fear_to_fuel.module.css';
import { ArrowRight, HelpCircle } from 'lucide-react';

export default function Day5Main3({ answers, onChange, onContinue }) {
  // Selected belief coming from previous step
  const selectedBelief = answers?.selectedBelief || '';

  // Form state pulled from answers (persist on parent)
  const triggerSituations = answers?.beliefTriggerSituations || '';

  // Local toggle for example prompts
  const [showPrompts, setShowPrompts] = useState(false);

  const handleTriggerChange = useCallback(
    (e) => onChange('beliefTriggerSituations', e.target.value),
    [onChange]
  );

  const handleNext = useCallback(() => onContinue(), [onContinue]);

  return (
    <div className={styles.mainContent}>
      {/* ─── Header ─────────────────────────────────────────── */}
      <div className={styles.header}>
        <h1 className={styles.title}>Understanding Your Belief</h1>
      </div>

      {/* ─── Selected belief call-out ────────────────────────── */}
      {selectedBelief && (
        <div className={styles.calloutBox} style={{ marginBottom: '24px' }}>
          <h3 className={styles.formLabelBold}>Your belief:</h3>
          <p>&quot;{selectedBelief}&quot;</p>
        </div>
      )}

      {/* ─── Question block ─────────────────────────────────── */}
      <div className={styles.formSection}>
    

        <label htmlFor="triggerSituations" className={styles.formLabel} style={{ marginTop: '16px' }}>
          When does this belief show up? Describe situations or moments when the voice feels loudest:
        </label>
        <textarea
          id="triggerSituations"
          className={styles.textInput}
          placeholder="Ex: Submitting work for review, speaking in meetings, Sunday evenings before the week starts…"
          rows={4}
          value={triggerSituations}
          onChange={handleTriggerChange}
        />

        {/* Helper / examples link */}
        <div className={styles.helperButtons} style={{ marginTop: '-10px' }}>
          <button className={styles.textButton} onClick={() => setShowPrompts(!showPrompts)}>
            <HelpCircle size={16} /> Need examples? Click here
          </button>
        </div>

        {/* Example prompts call-out */}
        {showPrompts && (
          <div className={styles.calloutBox}>
            <h3 className={styles.promptsTitle}>Think about:</h3>
            <p>
              • Moments when you feel judged or evaluated.<br />
              • Times you anticipate making a mistake.<br />
              • Situations that remind you of past criticism.<br />
              • Environments where comparison is common (social media, team reviews).<br />
            </p>
          </div>
        )}
      </div>

      {/* ─── Continue button ─────────────────────────────────── */}
      <div className={styles.actionButtons}>
        <button
          className={`${styles.primaryButton} ${styles.withIcon}`}
          onClick={handleNext}
          disabled={!triggerSituations.trim()}
        >
          Continue <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
} 