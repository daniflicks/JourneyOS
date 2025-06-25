'use client';

import React, { useState } from 'react';
import styles from '../../../app/feartofuel/styles/fear_to_fuel.module.css';
import { ArrowRight, HelpCircle } from 'lucide-react';

export default function Day3Main3({ answers, onChange, onContinue }) {
  const [showPrompts, setShowPrompts] = useState(false);
  
  // Get reflection from answers if available, otherwise empty string
  const reflection = answers?.mindStoryReflection || '';

  const handleNext = () => {
    // Save the mind story reflection
    onChange('mindStoryReflection', reflection);
    onContinue();
  };

  return (
      <div className={styles.mainContent}>
        

        <div className={styles.reflectionSection}>
          <h2 className={styles.subTitle}>How Your Mind Tells the Story</h2>
      

          <div>
              <label htmlFor="mindStory" className={styles.formLabel}>
              Notice how your mind has added to the story. <br/> How does your mind tell your story now? What dramatic language does it use?
              </label>
            <textarea
              id="mindStory"
              className={styles.textInput}
              value={reflection}
              onChange={(e) => onChange('mindStoryReflection', e.target.value)}
              placeholder="Example: 'I completely failed. Nobody cared. It was humiliating.'"
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
              What absolute words does your mind use? (always, never, completely)<br/>
              What emotions does it emphasize?<br/>
              How does it describe other people's reactions?<br/>
              What future predictions does it make?<br/><br/>
              Notice the difference between what actually happened and how your mind retells it.
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