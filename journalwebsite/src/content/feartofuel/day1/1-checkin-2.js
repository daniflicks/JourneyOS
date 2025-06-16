'use client';

import { useCallback } from 'react';
import BreathingExercise from '../../../app/feartofuel/components/BreathingExercise';

/**
 * Day 1 Check‑In Step 2 – Guided Breathing Exercise
 * Props injected via DayLayout:
 *  - onContinue: (overrideId?: string) => void
 */
export default function Day1Page2({ onContinue }) {

  // Wrap handlers in useCallback to ensure stable references
  const handleComplete = useCallback(() => {
    onContinue();
  }, [onContinue]);

  const handleSkip = useCallback(() => {
    onContinue('1-main-1');
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