'use client';

import { useCallback } from 'react';
import BreathingExercise from '../../../app/feartofuel/components/BreathingExercise';

export default function Day2Page2({ onContinue }) {

  const handleComplete = useCallback(() => {
    onContinue();
  }, [onContinue]);

  const handleSkip = useCallback(() => {
    onContinue('1-main-1');
  }, [onContinue]);

  return (
    <BreathingExercise
      onComplete={handleComplete}
      onSkip={handleSkip}
    />
  );
}