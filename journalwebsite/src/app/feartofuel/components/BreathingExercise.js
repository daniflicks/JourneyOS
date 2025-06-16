'use client';

import React, { useState, useEffect, useRef } from 'react';
import styles from '../styles/fear_to_fuel.module.css';
import { ArrowRight } from 'lucide-react';

const BreathingExercise = ({ onComplete, onSkip }) => {
  // State for breathing phases and progress
  const [breathingPhase, setBreathingPhase] = useState('inhale'); // inhale, hold, exhale, rest
  const [progress, setProgress] = useState(0);
  const [remainingTime, setRemainingTime] = useState(45);
  const [isComplete, setIsComplete] = useState(false);
  
  // Simulate breathing animation and progress
  useEffect(() => {
    const breathingCycle = () => {
      // Full cycle: inhale (4s) -> hold (4s) -> exhale (4s) -> rest (2s) = 14s
      const timeout = setTimeout(() => {
        if (breathingPhase === 'inhale') {
          setBreathingPhase('hold');
        } else if (breathingPhase === 'hold') {
          setBreathingPhase('exhale');
        } else if (breathingPhase === 'exhale') {
          setBreathingPhase('rest');
        } else {
          setBreathingPhase('inhale');
        }
      }, breathingPhase === 'rest' ? 2000 : 4000);
      
      return () => clearTimeout(timeout);
    };
    
    if (!isComplete) {
      const breathingInterval = breathingCycle();
      return () => breathingInterval;
    }
  }, [breathingPhase, isComplete]);
  
  // Update progress and remaining time
  useEffect(() => {
    if (remainingTime <= 0) {
      setIsComplete(true);
      return;
    }
    
    const interval = setInterval(() => {
      setRemainingTime(prev => {
        if (prev <= 1) {
          clearInterval(interval);
          setIsComplete(true);
          return 0;
        }
        return prev - 1;
      });
      setProgress((45 - remainingTime + 1) / 45 * 100);
    }, 1000);
    
    return () => clearInterval(interval);
  }, [remainingTime]);

  // When exercise naturally completes
  const calledOnce = useRef(false);
  
useEffect(() => {
  if (isComplete && onComplete && !calledOnce.current) {
         calledOnce.current = true;
         onComplete();
       }
     }, [isComplete, onComplete]);

  
  const handleSkip = () => {
    // Clear any running timers
    setIsComplete(true);
    // Directly call onSkip without showing completion screen
    if (onSkip) onSkip();
  };

  

  // Only show the main content if not skipped
  return (
    <div className={styles.mainContent}>
      {isComplete && !onSkip ? (
        <div className={styles.completionContent}>
          <div className={styles.checkCircle}>
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
              <path d="M20 28.6L15.4 24L14 25.4L20 31.4L34 17.4L32.6 16L20 28.6Z" fill="currentColor"/>
            </svg>
          </div>
          
          <h1 className={styles.completionTitle}>Breathing Complete</h1>
          
          <p className={styles.completionText}>
            I hope now you are feeling more grounded. Are you ready to begin the main exercise?
          </p>
          
          <button 
            className={`${styles.primaryButton} ${styles.withIcon}`}
            onClick={onComplete}
          >
            Begin <ArrowRight size={20} />
          </button>
        </div>
      ) : (
        <>
          <h1 className={styles.title}>Guided Breathing</h1>
          <p className={styles.introduction}>
            Follow the circle as it expands and contracts
          </p>
          
          {/* Breathing animation */}
          <div className={styles.breathingContainer}>
            <div 
              className={`${styles.breathingCircle} ${styles.circle1} ${styles[`circle1_${breathingPhase}`]}`}
            >
              <div 
                className={`${styles.breathingCircle} ${styles.circle2} ${styles[`circle2_${breathingPhase}`]}`}
              >
                <div 
                  className={`${styles.breathingCircle} ${styles.circle3} ${styles[`circle3_${breathingPhase}`]}`}
                >
                  <div 
                    className={`${styles.breathingCircle} ${styles.circle4} ${styles[`circle4_${breathingPhase}`]}`}
                  >
                    {breathingPhase === 'inhale' ? 'Inhale' : 
                      breathingPhase === 'hold' ? 'Hold' : 
                      breathingPhase === 'exhale' ? 'Exhale' : 'Rest'}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Breathing indicator text */}
          <div className={styles.breathingText}>
            <p className={styles.breathingInstruction}>
              {breathingPhase === 'inhale' ? 'Inhale slowly...' : 
                breathingPhase === 'hold' ? 'Hold gently...' : 
                breathingPhase === 'exhale' ? 'Exhale completely...' : 'Pause briefly...'}
            </p>
            <p className={styles.breathingFocus}>Focus on your breath</p>
          </div>
          
          {/* Time remaining */}
          <div className={styles.timerContainer}>
            <div className={styles.timerLabels}>
              <span>{remainingTime} seconds remaining</span>
              <span>Auto-continuing after timer</span>
            </div>
            <div className={styles.timerBar}>
              <div 
                className={styles.timerProgress}
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
          
          {/* Skip button */}
          <div style={{ textAlign: 'center' }}>
            <button 
              className={styles.secondaryButton} 
              onClick={handleSkip}
            >
              Skip to Main Exercise
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default BreathingExercise; 