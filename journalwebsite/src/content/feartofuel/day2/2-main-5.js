'use client';

import React, { useState } from 'react';
import styles from '../../../app/feartofuel/styles/fear_to_fuel.module.css';
import { ArrowRight, HelpCircle } from 'lucide-react';

export default function Day2Main5({ answers, onChange, onContinue }) {
  const [showPrompts, setShowPrompts] = useState(false);
  
  // Get values from answers if available, otherwise empty string
  const story = answers?.careerFailureStory || '';
  const age = answers?.careerFailureAge || '';

  const handleNext = () => {
    // Save both the career failure story and age
    onChange('careerFailureStory', story);
    onChange('careerFailureAge', age);
    onContinue();
  };

  return (
      <div className={styles.mainContent}>
        <div className={styles.header}>
          <h1 className={styles.title}>Key Moments</h1>
          <p className={styles.introductionMargin}>
            Remember 3 significant moments when you faced failure focused in your career.
          </p>
        </div>

        <div className={styles.reflectionSection}>
          <h2 className={styles.subTitle}>Your First Career Setback</h2>
         
          <div>
              <label htmlFor="careerFailure" className={styles.formLabel}>
              What happened?
              </label>
            <textarea
              id="careerFailure"
              className={styles.textInput}
              value={story}
              onChange={(e) => onChange('careerFailureStory', e.target.value)}
              placeholder="Think of your first significant career failure - the one that really shook your confidence."
              rows={6}
            />
          </div>

          <div>
              <label htmlFor="careerFailureAge" className={styles.formLabel}>
              How old were you?
              </label>
            <input
              id="careerFailureAge"
              type="number"
              className={styles.numberInput}
              value={age}
              onChange={(e) => onChange('careerFailureAge', e.target.value)}
              placeholder="Age"
              min="1"
              max="100"
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
              What was the situation or project?<br/>
              What went wrong and how did it feel?<br/>
              How did others react to your failure?<br/>
              What did you tell yourself about what happened?<br/><br/>
              Focus on the failure that had the biggest impact on your confidence.
            </p>
          </div>
        )}

        <div className={styles.actionButtons}>
          <button 
            className={`${styles.primaryButton} ${styles.withIcon}`}
            onClick={handleNext}
            disabled={!story.trim() || !age.trim()}
          >
            Continue <ArrowRight size={20} />
          </button>
        </div>
      </div>
  );
} 