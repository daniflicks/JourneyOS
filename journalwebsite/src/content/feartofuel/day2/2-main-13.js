'use client';

import React, { useState } from 'react';
import styles from '../../../app/feartofuel/styles/fear_to_fuel.module.css';
import { ArrowRight, HelpCircle } from 'lucide-react';

export default function Day2Main13({ answers, onChange, onContinue }) {
  const [showPrompts, setShowPrompts] = useState(false);
  
  // Get reflection from answers if available, otherwise empty string
  const reflection = answers?.whatWasAtStakeReflection || '';

  const handleNext = () => {
    // Save the what was at stake reflection
    onChange('whatWasAtStakeReflection', reflection);
    onContinue();
  };

  return (
      <div className={styles.mainContent}>
        <div className={styles.reflectionSection}>
          <h2 className={styles.subTitle}>What Was at Stake</h2>
      

          <div>
              <label htmlFor="whatWasAtStake" className={styles.formLabel}>
              What was at stake for you when you made that decision?
              </label>
            <textarea
              id="whatWasAtStake"
              className={styles.textInput}
              value={reflection}
              onChange={(e) => onChange('whatWasAtStakeReflection', e.target.value)}
              placeholder="Think about what you hoped to gain or were afraid to lose..."
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
              What were you hoping to prove or achieve?<br/>
              What would success have meant to you personally?<br/>
              What were you afraid of losing if you didn't try?<br/>
              How did this connect to your deeper values or dreams?<br/><br/>
              Consider both the practical stakes (money, career) and emotional ones (identity, belonging, self-worth).
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