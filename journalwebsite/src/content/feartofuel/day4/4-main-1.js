'use client';

import React from 'react';
import styles from '../../../app/feartofuel/styles/fear_to_fuel.module.css';
import { ArrowRight, Map } from 'lucide-react';
import { useJourneyStore } from '../../../store/journeyStore';
import { SECTION_TYPES } from '../../../constants/journeyConstants';

export default function Day4Main1({ answers, onChange, onContinue }) {
  // Get fear dump from Day 1 Main Exercise
  const day1FearDump = useJourneyStore(s => 
    s.userInputs?.[1]?.[SECTION_TYPES.MAIN_EXERCISE]?.fearDump || []
  );

  const handleNext = () => {
    onContinue();
  };

  return (
      <div className={styles.mainContent}>
        <div className={styles.header}>
          <h1 className={styles.title}>Understanding Fear's Hidden Message</h1>
          <p className={styles.introductionMargin} style={{marginBottom: '70px'}}>
            Every fear protects something you care about. <br/> Like a security system, fear activates when something valuable feels threatened. <br/> Today we'll decode what your specific fears are protecting.
          </p>
        </div>

        <h2 className={styles.subTitle}>Choose Your Top 3 Fears:</h2>

        <div className={styles.fearList}>
          <div className={styles.fearInput}>
            <div className={styles.inputWithDelete}>
              <input
                type="text"
                value={answers?.fear1 || ''}
                onChange={(e) => onChange('fear1', e.target.value)}
                placeholder="Fear #1: I'm afraid that…"
                className={styles.itemInput}
              />
            </div>
          </div>
          <div className={styles.fearInput}>
            <div className={styles.inputWithDelete}>
              <input
                type="text"
                value={answers?.fear2 || ''}
                onChange={(e) => onChange('fear2', e.target.value)}
                placeholder="Fear #2: I'm afraid that…"
                className={styles.itemInput}
              />
            </div>
          </div>
          <div className={styles.fearInput}>
            <div className={styles.inputWithDelete}>
              <input
                type="text"
                value={answers?.fear3 || ''}
                onChange={(e) => onChange('fear3', e.target.value)}
                placeholder="Fear #3: I'm afraid that…"
                className={styles.itemInput}
              />
            </div>
          </div>
        </div>

        <div className={styles.fearCategories} style={{marginBottom: '30px'}}>
          <div className={styles.fearCard}>
            <div className={styles.fearCardHeader}>
              <Map className={styles.fearCardIcon} />
              <h2 className={styles.fearCardTitle}>Or Use a Fear from Your Fear Map:</h2>
            </div>
            <div className={styles.fearExamples}>
              {day1FearDump.length > 0 ? (
                day1FearDump
                  .filter(fear => fear.trim()) // Filter out empty fears
                  .map((fear, index) => (
                    <p key={index}>"{fear}"</p>
                  ))
              ) : (
                <p>No fears found from your fear map.</p>
              )}
            </div>
          </div>
        </div>

        <div className={styles.actionButtons}>
          <button 
            className={`${styles.primaryButton} ${styles.withIcon}`}
            onClick={handleNext}
            disabled={!answers?.fear1?.trim() || !answers?.fear2?.trim() || !answers?.fear3?.trim()}
          >
            Continue <ArrowRight size={20} />
          </button>
        </div>
      </div>
  );
} 