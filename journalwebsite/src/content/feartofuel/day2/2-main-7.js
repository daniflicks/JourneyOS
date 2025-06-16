'use client';

import React, { useState } from 'react';
import styles from '../../../app/feartofuel/styles/fear_to_fuel.module.css';
import { ArrowRight, HelpCircle } from 'lucide-react';

export default function Day2Main7({ answers, onChange, onContinue }) {
  const [showPrompts, setShowPrompts] = useState(false);
  
  // Get reflection from answers if available, otherwise empty string
  const reflection = answers?.othersReactionReflection || '';

  const handleNext = () => {
    // Save the others reaction reflection
    onChange('othersReactionReflection', reflection);
    onContinue();
  };

  return (
      <div className={styles.mainContent}>
        <div className={styles.reflectionSection}>
          <h2 className={styles.subTitle}>Other's Reactions</h2>
      

          <div>
              <label htmlFor="othersReaction" className={styles.formLabel}>
              What did other's say or do?
              </label>
            <textarea
              id="othersReaction"
              className={styles.textInput}
              value={reflection}
              onChange={(e) => onChange('othersReactionReflection', e.target.value)}
              placeholder="Think about how people around you responded to your failure..."
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
              Were they supportive or critical?<br/>
              Did they offer help or solutions?<br/>
              What did they say or not say?<br/>
              How did their reaction make you feel?<br/><br/>
              Include family, friends, colleagues, or anyone else who knew about it.
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