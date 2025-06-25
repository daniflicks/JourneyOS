'use client';

import React, { useState } from 'react';
import styles from '../../../app/feartofuel/styles/fear_to_fuel.module.css';
import { ArrowRight, HelpCircle } from 'lucide-react';

export default function Day3Main2({ answers, onChange, onContinue }) {
  const [showPrompts, setShowPrompts] = useState(false);
  
  // Get reflection from answers if available, otherwise empty string
  const actualHappened = answers?.actualHappened || '';

  const handleNext = () => {
    // Save the actual happened response
    onChange('actualHappened', actualHappened);
    onContinue();
  };

  return (
      <div className={styles.mainContent}>
        <div className={styles.header}>
          <h1 className={styles.title}>Let's See This in Action</h1>
          <p className={styles.introductionMargin}>
            Think of a past difficult experience related to your project fears. Just pick one specific moment.
          </p>
        </div>

        <div className={styles.reflectionSection}>
          <h2 className={styles.subTitle}>What Actually Happened?</h2>
      

          <div>
              <label htmlFor="actualHappened" className={styles.formLabel}>
              Write just the facts. Like a news reporter would. No emotions or interpretations yet.
              </label>
            <textarea
              id="actualHappened"
              className={styles.textInput}
              value={actualHappened}
              onChange={(e) => onChange('actualHappened', e.target.value)}
              placeholder="Example: I launched my blog and got 3 readers in the first month."
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
              What specific event happened?<br/>
              When did it occur?<br/>
              What were the concrete results or outcomes?<br/>
              Who was involved?<br/><br/>
              Keep it factual - imagine you're writing a news report. Save your feelings and interpretations for later.
            </p>
          </div>
        )}

        <div className={styles.actionButtons}>
          <button 
            className={`${styles.primaryButton} ${styles.withIcon}`}
            onClick={handleNext}
            disabled={!actualHappened.trim()}
          >
            Continue <ArrowRight size={20} />
          </button>
        </div>
      </div>
  );
} 