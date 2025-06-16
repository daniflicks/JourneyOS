'use client';

import React, { useState } from 'react';
import styles from '../../../app/feartofuel/styles/fear_to_fuel.module.css';
import { ArrowRight, HelpCircle } from 'lucide-react';

export default function Day2Main3({ answers, onChange, onContinue }) {
  const [showPrompts, setShowPrompts] = useState(false);
  
  // Get reflection from answers if available, otherwise empty string
  const reflection = answers?.adultFailureReflection || '';

  const handleNext = () => {
    // Save the adult failure reflection
    onChange('adultFailureReflection', reflection);
    onContinue();
  };

  return (
      <div className={styles.mainContent}>
        

        <div className={styles.reflectionSection}>
          <h2 className={styles.subTitle}>Part 2: Adult Models</h2>
      

          <div>
              <label htmlFor="adultFailure" className={styles.formLabel}>
              How did the adults around you (parents, family) deal with their own failures or mistakes?
              </label>
            <textarea
              id="adultFailure"
              className={styles.textInput}
              value={reflection}
              onChange={(e) => onChange('adultFailureReflection', e.target.value)}
              placeholder="Reflect on how the adults in your life handled their own setbacks..."
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
              Did they talk about their mistakes openly?<br/>
              Did they bounce back quickly or struggle longer?<br/>
              Did they ask for help or handle things alone?<br/><br/>
              Take your time and write whatever observations come to mind.
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
