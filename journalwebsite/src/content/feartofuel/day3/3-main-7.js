'use client';

import React, { useState, useCallback } from 'react';
import styles from '../../../app/feartofuel/styles/fear_to_fuel.module.css';
import { ArrowRight, Plus, X } from 'lucide-react';

export default function Day3Main8({ answers, onChange, onContinue }) {
  // Initialize as array of statements
  const statements = (() => {
    if (!answers.antiCatastrophe) return [''];
    if (Array.isArray(answers.antiCatastrophe)) return answers.antiCatastrophe;
    // If it's a string (from old format), convert to array
    return [answers.antiCatastrophe];
  })();

  const handleStatementChange = useCallback((index, value) => {
    const newStatements = [...statements];
    newStatements[index] = value;
    onChange('antiCatastrophe', newStatements);
  }, [statements, onChange]);

  const addNewStatement = useCallback(() => {
    // Only add if the last statement has content
    const lastStatement = statements[statements.length - 1];
    if (lastStatement && lastStatement.trim()) {
      onChange('antiCatastrophe', [...statements, '']);
    }
  }, [statements, onChange]);

  const removeStatement = useCallback((index) => {
    const newStatements = statements.filter((_, i) => i !== index);
    onChange('antiCatastrophe', newStatements.length ? newStatements : ['']);
  }, [statements, onChange]);

  const handleKeyDown = useCallback((e, index) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (statements[index].trim()) {
        addNewStatement();
        setTimeout(() => {
          const textareas = document.querySelectorAll('textarea[id^="antiCatastrophe"]');
          if (textareas[textareas.length - 1]) textareas[textareas.length - 1].focus();
        }, 0);
      }
    }
  }, [statements, addNewStatement]);

  const handleNext = useCallback(() => {
    onChange('antiCatastrophe', statements);
    onContinue();
  }, [statements, onChange, onContinue]);

  return (
    <div className={styles.mainContent}>
      <h1 className={styles.title} style={{ marginBottom: '40px' }}>
        Your Anti-Catastrophizing Tool
      </h1>

      <label htmlFor="antiCatastrophe" className={styles.formLabel} style={{ marginBottom: '30px' }}>
        Complete this statement:
        </label>

      <h2 className={styles.formLablel}>
        "Even if _________ happens, I will _________"
      </h2>

      <div className={styles.formSection}>
        <label htmlFor="antiCatastrophe" className={styles.formLabel} style={{ marginTop: '-.5rem', marginBottom: '-1rem' }} >
        Now it’s your turn:
        </label>
        <div className={styles.fearList} style={{ gap: '0rem' }}>
          {statements.map((statement, index) => (
            <div key={index} className={styles.fearInput}>
              <div className={styles.inputWithDelete}>
                <textarea
                  id={`antiCatastrophe-${index}`}
                  className={styles.textInput}
                  value={statement}
                  onChange={(e) => handleStatementChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  placeholder='Example: "Even if my project fails, I will learn valuable lessons and try again."'
                  style={{ minHeight: '60px', resize: 'vertical' }}
                />
                {statements.length > 1 && (
                  <button
                    onClick={() => removeStatement(index)}
                    className={styles.deleteButton}
                    aria-label="Remove statement"
                  >
                    <X size={20} />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.helperButtons} style={{ marginTop: '-2rem' }}>
        <button 
          onClick={addNewStatement} 
          className={styles.textButton}
          disabled={!statements[statements.length - 1]?.trim()}
          style={{
            opacity: !statements[statements.length - 1]?.trim() ? 0.5 : 1,
            cursor: !statements[statements.length - 1]?.trim() ? 'not-allowed' : 'pointer'
          }}
        >
          <Plus size={16} /> Add another statement
        </button>
      </div>

      <div style={{ marginBottom: '40px' }}>
        <p className={styles.formLabel} style={{ fontStyle: 'italic' }}>
          Screenshot or write this down. You'll need it when fear visits.
        </p>
      </div>

      <div className={styles.actionButtons}>
        <button 
          className={styles.primaryButton} 
          onClick={handleNext}
          disabled={!statements.some(s => s.trim())}
        >
          Continue <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
} 