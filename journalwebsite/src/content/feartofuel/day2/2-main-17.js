'use client';

import React, { useState } from 'react';
import styles from '../../../app/feartofuel/styles/fear_to_fuel.module.css';
import { ArrowRight, HelpCircle } from 'lucide-react';

export default function Day2Main17({ 
  answers, 
  onChange, 
  onContinue, 
  aiResponse,
  aiLoading,
  aiError 
}) {
  const lessonsLearned = answers?.lessonsFromMostRecentMemory || '';
  const [showPrompts, setShowPrompts] = useState(false);

  // Use the aiResponse from pageMap (preloaded most recent failure summary)
  const mostRecentSummary = aiResponse || '';
  
  const handleNext = () => {
    onContinue();
  };

  return (
    <div className={styles.mainContent}>
      <div className={styles.header}>
        <h1 className={styles.title}>Finding the Lessons</h1>
        <p className={styles.introductionMargin}>
          Now let's look at these experiences through a different lens <br/> by taking each memory and finding the strength and wisdom you gained.
        </p>
      </div>

      <div className={styles.formSection}>
        <label htmlFor="lessonsLearned" className={styles.formLabel}>
          Finally, what did you learn from {mostRecentSummary || 'your most recent experience'}?
        </label>
        <textarea
          id="lessonsLearned"
          className={styles.textInput}
          value={lessonsLearned}
          onChange={(e) => onChange('lessonsFromMostRecentMemory', e.target.value)}
          placeholder="Think about the strength, resilience, or wisdom you gained from this experience. What did it teach you about yourself, others, or life?"
          rows={6}
        />
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
          <h3 className={styles.promptsTitle}>Think beyond just "I'm not as good as I thought." What practical skills, awareness, or resilience did you develop from this? For example:</h3>
          <p>
            How to handle difficult client feedback<br/>
            The importance of setting clear expectations<br/>
            That you could survive professional disappointment
          </p>
        </div>
      )}

      <div className={styles.actionButtons}>
        <button 
          className={`${styles.primaryButton} ${styles.withIcon}`}
          onClick={handleNext}
          disabled={!lessonsLearned.trim()}
        >
          Continue <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
} 