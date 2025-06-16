'use client';

import React, { useState } from 'react';
import styles from '../../../app/feartofuel/styles/fear_to_fuel.module.css';
import { ArrowRight, HelpCircle } from 'lucide-react';

export default function Day2Main17({ answers, onChange, onContinue }) {
  const [showPrompts, setShowPrompts] = useState(false);
  
  // Get reflection from answers if available, otherwise empty string
  const reflection = answers?.mostRecentFailureReflection || '';

  const handleNext = () => {
    // Save the most recent failure reflection
    onChange('mostRecentFailureReflection', reflection);
    onContinue();
  };

  return (
      <div className={styles.mainContent}>
        <div className={styles.reflectionSection}>
          <h2 className={styles.subTitle}>Most Recent Failure</h2>
      

          <div>
              <label htmlFor="mostRecentFailure" className={styles.formLabel}>
              Let's look at your most recent career setback, what happened?
              </label>
            <textarea
              id="mostRecentFailure"
              className={styles.textInput}
              value={reflection}
              onChange={(e) => onChange('mostRecentFailureReflection', e.target.value)}
              placeholder="Think about your most recent professional disappointment or setback..."
              rows={6}
            />
          </div>
        </div>

        <div className={styles.helperButtons}>
          <button
            className={styles.textButton}
            onClick={() => setShowPrompts(!showPrompts)}
          >
            <HelpCircle size={16} /> Need a prompt?
          </button>
        </div>

        {showPrompts && (
          <div className={`${styles.calloutBox} `} style={{ marginBottom: '20px' }}>
            <h3 className={styles.promptsTitle}>Think about:</h3>
            <p>
              What was the situation or opportunity?<br/>
              What went wrong or didn't work out?<br/>
              How did you feel when it happened?<br/>
              What did you learn about yourself from this experience?<br/><br/>
              This could be anything from a job rejection to a project that failed, a promotion you didn't get, or a business idea that didn't work out.
            </p>
          </div>
        )}

        <div className={styles.actionButtons}>
          <button 
            className={`${styles.primaryButton} ${styles.withIcon}`}
            onClick={handleNext}
            disabled={!reflection.trim()}
          >
            Continue <ArrowRight size={20} />
          </button>
        </div>
      </div>
  );
} 