'use client';

import React, { useState } from 'react';
import styles from '../../../app/feartofuel/styles/fear_to_fuel.module.css';
import { ArrowRight, HelpCircle } from 'lucide-react';

export default function Day2Main15({ answers, onChange, onContinue }) {
  const [showPrompts, setShowPrompts] = useState(false);
  
  // Get reflection from answers if available, otherwise empty string
  const reflection = answers?.copingMechanismsReflection || '';

  const handleNext = () => {
    // Save the coping mechanisms reflection
    onChange('copingMechanismsReflection', reflection);
    onContinue();
  };

  return (
      <div className={styles.mainContent}>
        <div className={styles.reflectionSection}>
          <h2 className={styles.subTitle}>Coping Strategies</h2>
      

          <div>
              <label htmlFor="copingMechanisms" className={styles.formLabel}>
              How did you cope in the weeks or months after?
              </label>
            <textarea
              id="copingMechanisms"
              className={styles.textInput}
              value={reflection}
              onChange={(e) => onChange('copingMechanismsReflection', e.target.value)}
              placeholder="Think about how you handled the aftermath of this failure..."
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
              Did you withdraw or reach out to others?<br/>
              What activities or behaviors helped you feel better?<br/>
              Did you try to learn from it or avoid thinking about it?<br/>
              How did you rebuild your confidence?<br/><br/>
              Include both healthy and unhealthy coping strategies you used during that time.
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