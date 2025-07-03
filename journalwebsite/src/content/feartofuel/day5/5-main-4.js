'use client';

import React, { useState, useCallback } from 'react';
import styles from '../../../app/feartofuel/styles/fear_to_fuel.module.css';
import { ArrowRight, HelpCircle } from 'lucide-react';

export default function Day5Main4({ answers, onChange, onContinue }) {
  // Form state pulled from parent
  const beliefCost = answers?.beliefCostReflection || '';

  const [showPrompts, setShowPrompts] = useState(false);

  const handleChange = useCallback(
    (e) => onChange('beliefCostReflection', e.target.value),
    [onChange]
  );

  const handleNext = useCallback(() => onContinue(), [onContinue]);

  return (
    <div className={styles.mainContent}>
      <div className={styles.header}>
        <h1 className={styles.title}>The Cost Question</h1>
        <p className={styles.introduction} style={{ marginBottom: '32px' }}>
          What has believing this cost you so far?
        </p>
      </div>

      {/* Think-about card */}
      <div className={styles.fearCard} style={{ marginBottom: '30px' }}>
        <h3 className={styles.promptsTitle}>Think about:</h3>
        <ul className={styles.bulletList}>
          <li>Opportunities you've passed up</li>
          <li>Risks you haven't taken</li>
          <li>Dreams you've postponed</li>
        </ul>
      </div>

      {/* Main textarea */}
      <div className={styles.formSection}>
        <label htmlFor="beliefCost" className={styles.formLabel} style={{ marginTop: '16px' }}>
          Describe the costs in your own words:
        </label>
        <textarea
          id="beliefCost"
          className={styles.textInput}
          placeholder="Ex: I turned down a leadership role, avoided pitching my idea, delayed applying for art school…"
          rows={5}
          value={beliefCost}
          onChange={handleChange}
        />

        <div className={styles.helperButtons} style={{ marginTop: '-10px' }}>
          <button className={styles.textButton} onClick={() => setShowPrompts(!showPrompts)}>
            <HelpCircle size={16} /> Get prompts
          </button>
        </div>

        {showPrompts && (
          <div className={styles.calloutBox}>
            <h3 className={styles.promptsTitle}>Need inspiration?</h3>
            <p>
              • Times you stayed silent when you had something to share.<br />
              • Projects still sitting in your "someday" folder.<br />
              • Challenges you avoided that could have taught you new skills.<br />
              • Connections you didn't pursue out of self-doubt.
            </p>
          </div>
        )}
      </div>

      <div className={styles.actionButtons}>
        <button
          className={`${styles.primaryButton} ${styles.withIcon}`}
          onClick={handleNext}
          disabled={!beliefCost.trim()}
        >
          Continue <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
} 