'use client';

import React, { useState, useCallback } from 'react';
import { useJourneyStore } from '../../../store/journeyStore';
import { SECTION_TYPES } from '../../../constants/journeyConstants';
import styles from '../../../app/feartofuel/styles/fear_to_fuel.module.css';
import { ArrowRight, Plus, X } from 'lucide-react';

export default function Day3Main6({ answers, onContinue, onChange }) {
  // 1️⃣ Read Day 1 Fear Dump
  const fearDump = useJourneyStore(state =>
    state.userInputs?.[1]?.[SECTION_TYPES.MAIN_EXERCISE]?.fearDump
  ) ?? [];

  // 2️⃣ Initialize items from saved answers or fresh dump
  const initialItems = answers?.realityCheck?.length > 0
    ? answers.realityCheck
    : fearDump.map(fear => ({ fear, reality: 0, survival: 0 }));
  const [items, setItems] = useState(initialItems);

  // Helper to defer store write
  const saveDeferred = useCallback((next) => {
    setTimeout(() => onChange('realityCheck', next), 0);
  }, [onChange]);

  // 3️⃣ Reality-scale click handler
  const handleReality = (index, value) => {
    const next = items.map((it, i) =>
      i === index ? { ...it, reality: value } : it
    );
    setItems(next);
    saveDeferred(next);
  };

  // 4️⃣ Survival slider handler
  const handleSurvival = (index, value) => {
    const next = items.map((it, i) =>
      i === index ? { ...it, survival: value } : it
    );
    setItems(next);
    saveDeferred(next);
  };

  // 5️⃣ Add-new-fear handlers
  const [showInput, setShowInput] = useState(false);
  const [newFear, setNewFear] = useState('');

  const addFear = () => {
    const trimmed = newFear.trim();
    if (!trimmed) return;
    const next = [...items, { fear: trimmed, reality: 0, survival: 0 }];
    setItems(next);
    saveDeferred(next);
    setNewFear('');
    setShowInput(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') addFear();
  };

  // 6️⃣ Continue
  const handleNext = () => {
    // ensure final save
    saveDeferred(items);
    onContinue();
  };

  return (
    <div className={styles.mainContent}>
      <div style={{ marginBottom: '70px' }}>
        <h1 className={styles.title} style={{ marginBottom: '40px' }}>
          Reality Check
        </h1>
        <p className={styles.introduction}>
          Let's ground your fears in reality. Rate how likely each fear is to actually
          happen, <br />
          and estimate your ability to survive if it did.
        </p>
      </div>

      <div className={styles.fearTable}>
        <div className={styles.tableHeaders}>
          <div className={styles.headerLabel}>My Catastrophic Fear</div>
          <div className={styles.headerLabel}>Reality Scale</div>
          <div className={styles.headerLabel}>Survival Likelihood</div>
        </div>

        {items.map((item, idx) => (
          <div key={idx} className={styles.fearRow}>
            <div className={styles.fearText}>{item.fear}</div>

            <div className={styles.realityScale}>
              {[...Array(10)].map((_, j) => (
                <button
                  key={j}
                  onClick={() => handleReality(idx, j + 1)}
                  className={`${styles.scaleDot} ${
                    item.reality >= j + 1 ? styles.scaleDotActive : ''
                  }`}
                />
              ))}
            </div>

            <div className={styles.survivalContainer}>
              <div className={styles.survivalDisplay}>
                <input
                  type="range"
                  min={0}
                  max={100}
                  step={5}
                  value={item.survival}
                  onChange={e => handleSurvival(idx, Number(e.target.value))}
                  className={styles.survivalBar}
                  style={{ '--survival-percent': `${item.survival}%` }}
                />
                <div className={styles.survivalPercentage}>
                  {item.survival}%
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.helperButtons}>
        <button onClick={() => setShowInput(true)} className={styles.textButton}>
          <Plus size={16} /> Add another fear
        </button>

        {showInput && (
          <div className={styles.fearInput}>
            <div className={styles.inputWithDelete}>
              <input
                type="text"
                value={newFear}
                onChange={e => setNewFear(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Enter your fear..."
                className={styles.itemInput}
                autoFocus
              />
              <button
                onClick={addFear}
                className={styles.deleteButton}
                style={{ color: '#E07B67' }}
                aria-label="Add fear"
              >
                <Plus size={20} />
              </button>
              <button
                onClick={() => { setShowInput(false); setNewFear(''); }}
                className={styles.deleteButton}
                aria-label="Cancel"
              >
                <X size={20} />
              </button>
            </div>
          </div>
        )}
      </div>

      <div className={styles.actionButtons}>
        <button className={styles.primaryButton} onClick={handleNext}>
          Continue <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
}