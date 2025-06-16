'use client';

import React, { useState } from 'react';
import styles from '../../../app/feartofuel/styles/fear_to_fuel.module.css';
import { ArrowRight, HelpCircle } from 'lucide-react';

export default function Day2Main11({ answers, onChange, onContinue }) {
  const [showPrompts, setShowPrompts] = useState(false);
  
  // Get reflection from answers if available, otherwise empty string
  const reflection = answers?.mostPainfulFailureReflection || '';

  const handleNext = () => {
    // Save the most painful failure reflection
    onChange('mostPainfulFailureReflection', reflection);
    onContinue();
  };

  return (
      <div className={styles.mainContent}>
        <div className={styles.reflectionSection}>
          <h2 className={styles.subTitle}>Most Painful Failure</h2>
      

          <div>
              <label htmlFor="mostPainfulFailure" className={styles.formLabel}>
              Now let's look at what felt like your most painful career failure, what happened?
              </label>
            <textarea
              id="mostPainfulFailure"
              className={styles.textInput}
              value={reflection}
              onChange={(e) => onChange('mostPainfulFailureReflection', e.target.value)}
              placeholder="Think about the career failure that hurt the most emotionally..."
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
              What made this failure feel more painful than others?<br/>
              What were you hoping to achieve?<br/>
              What was at stake for you personally?<br/>
              How did this impact your sense of identity or self-worth?<br/><br/>
              Focus on the failure that left the deepest emotional impact, not necessarily the biggest or most public one.
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