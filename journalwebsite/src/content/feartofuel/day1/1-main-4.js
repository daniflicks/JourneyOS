'use client';

import React, { useState, useCallback } from 'react';
import styles from '../../../app/feartofuel/styles/fear_to_fuel.module.css';
import { ArrowRight, Plus, X, HelpCircle } from 'lucide-react';

export default function Day1Main4({ answers, onChange, onContinue }) {
  const [showPrompts, setShowPrompts] = useState(false);
  // now using answers.fearDump
  const fears = (answers.fearDump && answers.fearDump.length > 0)
    ? answers.fearDump
    : [''];

  const handleFearChange = useCallback((index, value) => {
    const newFears = [...fears];
    newFears[index] = value;
    onChange('fearDump', newFears);            // ← write to fearDump
  }, [fears, onChange]);

  const addNewFear = useCallback(() => {
    onChange('fearDump', [...fears, '']);       // ← fix: use key, value pattern
  }, [fears, onChange]);

  const removeFear = useCallback((index) => {
    const newFears = fears.filter((_, i) => i !== index);
    onChange('fearDump', newFears.length ? newFears : ['']);  // ← fix: use key, value pattern
  }, [fears, onChange]);

  const handleKeyDown = useCallback((e, index) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (fears[index].trim()) {
        addNewFear();
        setTimeout(() => {
          const inputs = document.querySelectorAll(`.${styles.textInput}`);
          if (inputs[inputs.length - 1]) inputs[inputs.length - 1].focus();
        }, 0);
      }
    }
  }, [fears, addNewFear]);

  const handleNext = useCallback(() => {
    onContinue();
  }, [onContinue]);

  const prompts = [
    "I'm afraid I won't be able to…",
    "I worry that others will…",
    "I fear I might not have…",
    "What if I can't…",
    "I'm concerned about my ability to…"
  ];

  return (
    <div className={styles.mainContent}>
      <div className={styles.header}>
        <h1 className={styles.title}>Fear Dump</h1>
        <p className={styles.introduction}>
          List every fear that begins with "I'm afraid that…". No judging—just collect them.
        </p>
      </div>

      <div className={styles.fearList}>
        {fears.map((fear, index) => (
          <div key={index} className={styles.fearInput}>
            <div className={styles.inputWithDelete}>
              <input
                type="text"
                value={fear}
                onChange={(e) => handleFearChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                placeholder="I'm afraid that…"
                className={styles.itemInput}
              />
              {fears.length > 1 && (
                <button
                  onClick={() => removeFear(index)}
                  className={styles.deleteButton}
                  aria-label="Remove fear"
                >
                  <X size={20} />
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className={styles.helperButtons}>
        <button onClick={addNewFear} className={styles.textButton}>
          <Plus size={16} /> Add another fear
        </button>
        <button
          className={styles.textButton}
          onClick={() => setShowPrompts(!showPrompts)}
        >
          <HelpCircle size={16} /> Need a prompt?
        </button>
      </div>

      {showPrompts && (
        <div className={`${styles.calloutBox} `} style={{ marginBottom: '20px' }}>
          <h3 className={styles.promptsTitle}>Try starting with:</h3>
          <ul className={styles.formLabelList}>
            {prompts.map((p, i) => <li key={i}>{p}</li>)}
          </ul>
        </div>
      )}

      <div className={styles.actionButtons}>
        <button
          className={`${styles.primaryButton} ${styles.withIcon}`}
          onClick={handleNext}
          disabled={!fears.some(f => f.trim())}
        >
          Continue to Categorization <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
}
