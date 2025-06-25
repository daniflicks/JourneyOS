'use client';

import React, { useState } from 'react';
import styles from '../../../app/feartofuel/styles/fear_to_fuel.module.css';
import { ArrowRight, HelpCircle } from 'lucide-react';

export default function Day2Main6({ answers, onChange, onContinue }) {
  const [showPrompts, setShowPrompts] = useState(false);
  
  // Get reflection from answers if available, otherwise empty string
  const reflection = answers?.selfDecisionReflection || '';

  const handleNext = () => {
    // Save the self decision reflection
    onChange('selfDecisionReflection', reflection);
    onContinue();
  };

  return (
      <div className={styles.mainContent}>
        <div className={styles.reflectionSection}>
          <h2 className={styles.subTitle}>Internal Narrative</h2>
      

          <div>
              <label htmlFor="selfDecision" className={styles.formLabel}>
              What did you decide about yourself after this happened?
              </label>
            <textarea
              id="selfDecision"
              className={styles.textInput}
              value={reflection}
              onChange={(e) => onChange('selfDecisionReflection', e.target.value)}
              placeholder="What conclusions did you draw about yourself, your abilities, or your worth..."
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
              What did you tell yourself about your abilities?<br/>
              Did you decide you weren't capable of certain things?<br/>
              What beliefs about yourself did this create or reinforce?<br/>
              How did this change how you saw your potential?<br/><br/>
              Focus on the story you told yourself about what this failure meant about you as a person.
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