'use client';

import React, { useState } from 'react';
import styles from '../../../app/feartofuel/styles/fear_to_fuel.module.css';
import { ArrowRight, HelpCircle } from 'lucide-react';

export default function Day2Main1({ answers, onChange, onContinue }) {
  const [showPrompts, setShowPrompts] = useState(false);
  
  // Get reflection from answers if available, otherwise empty string
  const reflection = answers?.earlyMessagesReflection || '';

  const handleNext = () => {
    // Save the early messages reflection
    onChange('earlyMessagesReflection', reflection);
    onContinue();
  };

  return (
      <div className={styles.mainContent}>
        <div className={styles.header}>
          <h1 className={styles.title}>Guided Reflection</h1>
          <p className={styles.introductionMargin}>
            Find a quiet space. Take three deep breaths.
          </p>
        </div>

        <div className={styles.reflectionSection}>
          <h2 className={styles.subTitle}>Part 1: Early Messages</h2>
      

          <div>
              <label htmlFor="earlyMessages" className={styles.formLabel}>
              Think back to your earliest memories about failure:<br/>
              What did you learn about failure as a child?
              </label>
            <textarea
              id="earlyMessages"
              className={styles.textInput}
              value={reflection}
              onChange={(e) => onChange('earlyMessagesReflection', e.target.value)}
              placeholder="Take your time to reflect on your earliest memories..."
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
              Was it okay to mess up in your house?<br/>
              Did adults get angry or dissapointed when you failed?<br/>
              Was failure shameful or a learning moment?<br/>
              How did adults handle failure? <br/><br/>
              Just write whatever comes to mind. No perfect answers needed.
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