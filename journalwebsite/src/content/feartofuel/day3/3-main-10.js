'use client';

import React, { useState, useCallback } from 'react';
import styles from '../../../app/feartofuel/styles/fear_to_fuel.module.css';
import { ArrowRight, Plus, X, HelpCircle } from 'lucide-react';

export default function Day3Main10({ answers, onChange, onContinue }) {
  const [showPrompts, setShowPrompts] = useState(false);
  
  // Get additional failures from answers, default to empty array for optional section
  const failures = (answers.additionalFailures && answers.additionalFailures.length > 0)
    ? answers.additionalFailures
    : [''];

  const handleFailureChange = useCallback((index, value) => {
    const newFailures = [...failures];
    newFailures[index] = value;
    onChange('additionalFailures', newFailures);
  }, [failures, onChange]);

  const addNewFailure = useCallback(() => {
    onChange('additionalFailures', [...failures, '']);
  }, [failures, onChange]);

  const removeFailure = useCallback((index) => {
    const newFailures = failures.filter((_, i) => i !== index);
    onChange('additionalFailures', newFailures.length ? newFailures : ['']);
  }, [failures, onChange]);

  const handleKeyDown = useCallback((e, index) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (failures[index].trim()) {
        addNewFailure();
        setTimeout(() => {
          const inputs = document.querySelectorAll(`.${styles.itemInput}`);
          if (inputs[inputs.length - 1]) inputs[inputs.length - 1].focus();
        }, 0);
      }
    }
  }, [failures, addNewFailure]);

  const handleNext = useCallback(() => {
    onContinue();
  }, [onContinue]);

  return (
    <div className={styles.mainContent}>
      <div className={styles.reflectionSection}>
        <h2 className={styles.subTitle}>Do you have any other significant failures or experiences that affected you?</h2>
        <p className={styles.introduction}>
          Think of any other professional setbacks, rejections, or experiences that shaped how you view risk and failure. This section is optional.
        </p>
      </div>

      <div className={styles.fearList}>
        {failures.map((failure, index) => (
          <div key={index} className={styles.fearInput}>
            <div className={styles.inputWithDelete}>
              <input
                type="text"
                value={failure}
                onChange={(e) => handleFailureChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                placeholder="Describe another significant experience..."
                className={styles.itemInput}
              />
              {failures.length > 1 && (
                <button
                  onClick={() => removeFailure(index)}
                  className={styles.deleteButton}
                  aria-label="Remove experience"
                >
                  <X size={20} />
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className={styles.helperButtons}>
        <button onClick={addNewFailure} className={styles.textButton}>
          <Plus size={16} /> Add another experience
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
          <h3 className={styles.promptsTitle}>Consider:</h3>
          <p>
            Times you were passed over for opportunities<br/>
            Projects that didn't work out as planned<br/>
            Moments when you felt like you weren't good enough<br/>
            Experiences that made you question your abilities<br/>
            Any professional disappointments that still affect you<br/><br/>
            Include as many or as few as feel relevant to you.
          </p>
        </div>
      )}

      <div className={styles.actionButtons}>
        <button
          className={`${styles.primaryButton} ${styles.withIcon}`}
          onClick={handleNext}
        >
          Continue to Analysis <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
} 