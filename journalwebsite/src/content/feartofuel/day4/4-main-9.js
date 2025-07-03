'use client';

import React, { useCallback, useEffect } from 'react';
import styles from '../../../app/feartofuel/styles/fear_to_fuel.module.css';
import { ArrowRight, MessageSquare } from 'lucide-react';

export default function Day4Main9({ answers, onChange, onContinue, aiResponse, aiLoading, aiError }) {
  // Aggregate data for prompt
  useEffect(() => {
    const payloadObj = {
      fear1: answers.fear1 || '',
      protects1: answers.fearProtects || '',
      cares1: answers.careAbout || '',
      direction1: answers.flipOutcome1 || '',
      action1: answers.flipStep1 || '',

      fear2: answers.fear2 || '',
      protects2: answers.fearProtects2 || '',
      cares2: answers.careAbout2 || '',
      direction2: answers.flipOutcome2 || '',
      action2: answers.flipStep2 || '',

      fear3: answers.fear3 || '',
      protects3: answers.fearProtects3 || '',
      cares3: answers.careAbout3 || '',
      direction3: answers.flipOutcome3 || '',
      action3: answers.flipStep3 || '',
    };

    const payload = Object.entries(payloadObj)
      .map(([k,v])=>`{${k}}=${v}`) // simple encode; actual placeholders replaced in server
      .join('\n');

    if (payload && payload !== answers.reframeTrigger) {
      onChange('reframeTrigger', payload);
    }
  }, [answers, onChange]);

  const handleNext = useCallback(()=> onContinue(), [onContinue]);

  if (aiLoading) {
    return (
      <div className={styles.mainContent}>
        <div className={styles.flowerContainer}>{Array.from({length:8}).map((_,i)=>(<div key={i} className={styles.petal} style={{'--rotation':`${i*45}deg`}}></div>))}</div>
        <h2 className={styles.title}>Reframing Your Fears…</h2>
        <p className={styles.introduction}>Coco is turning each fear into a source of strength.</p>
      </div>
    );
  }

  if (aiError) {
    return <div className={styles.mainContent}><p className="text-red-500 mt-4">Error: {aiError}</p></div>;
  }

  return (
    <div className={styles.mainContent}>
      {!aiLoading && (
        <div className={styles.header}>
          <h1 className={styles.title}>Fears Reframed</h1>
          <p className={styles.introductionMargin}>See how each fear reveals your deepest values and possibilities.</p>
        </div>
      )}

      {!aiLoading && aiResponse && (
        <div className={styles.aiAnalysisCard}>
          <div className={styles.aiHeader}>
            <div className={styles.aiIconContainer}><MessageSquare className={styles.aiIcon}/></div>
            <div className={styles.aiInfo}><h2 className={styles.aiName}>Reframe Statements</h2><p className={styles.aiRole}>From Coco, your guide</p></div>
          </div>
          <div className={styles.aiMessage}><div className="whitespace-pre-wrap">{aiResponse}</div></div>
        </div>
      )}

      {!aiLoading && (
        <div className={styles.actionButtons}>
          <button className={`${styles.primaryButton} ${styles.withIcon}`} onClick={handleNext}>Continue to Reflection<ArrowRight size={20}/></button>
        </div>
      )}
    </div>
  );
} 