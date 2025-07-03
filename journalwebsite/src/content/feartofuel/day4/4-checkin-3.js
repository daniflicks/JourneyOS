'use client';

import { useCallback } from 'react';
import BreathingExercise from '../../../app/feartofuel/components/BreathingExercise';

/**
 * Day 4 Check‑In Step 3 – Guided Breathing Exercise
 * Props injected via DayLayout:
 *  - onContinue: (overrideId?: string) => void
 */
export default function Day4Page3({ onContinue }) {

  // Wrap handlers in useCallback to ensure stable references
  const handleComplete = useCallback(() => {
    onContinue();
  }, [onContinue]);

  const handleSkip = useCallback(() => {
    onContinue('4-main-1');
  }, [onContinue]);

  return (
    <BreathingExercise
      // When the breathing exercise completes, advance to the next page in PAGE_MAP
      onComplete={handleComplete}
      // If the user skips, jump straight to the first main exercise page
      onSkip={handleSkip}
    />
  );
} 