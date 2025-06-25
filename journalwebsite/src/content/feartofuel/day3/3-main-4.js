'use client';

import React, { useState } from 'react';
import styles from '../../../app/feartofuel/styles/fear_to_fuel.module.css';
import { ArrowRight, HelpCircle } from 'lucide-react';

export default function Day3Main4({ answers, onChange, onContinue }) {
  const [showPrompts, setShowPrompts] = useState(false);
  
  // Get reflection from answers if available, otherwise empty string
  const reflection = answers?.futureCatastropheReflection || '';

  const handleNext = () => {
    // Save the future catastrophe reflection
    onChange('futureCatastropheReflection', reflection);
    onContinue();
  };

  return (
      <div className={styles.mainContent}>
        

        <div className={styles.reflectionSection}>
          <h2 className={styles.subTitle}>The Future Catastrophe Your Mind Creates</h2>
      

          <div>
              <label htmlFor="futureCatastrophe" className={styles.formLabel}>
              What worse version does your mind imagine for next time?
              </label>
            <textarea
              id="futureCatastrophe"
              className={styles.textInput}
              value={reflection}
              onChange={(e) => onChange('futureCatastropheReflection', e.target.value)}
              placeholder="Example: 'Next time everyone will laugh at me and I'll never recover.'"
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
              What catastrophe does your mind create?<br/>
              How much worse does it make the next attempt?<br/>
              What permanent damage does it predict?<br/>
              How does it amplify the consequences?<br/><br/>
              Notice how your mind takes one experience and creates an even scarier future scenario.
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