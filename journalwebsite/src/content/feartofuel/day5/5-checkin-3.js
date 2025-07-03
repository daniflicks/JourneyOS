'use client';

import { useCallback } from 'react';
import BreathingExercise from '../../../app/feartofuel/components/BreathingExercise';

export default function Day5Page3({ onContinue }) {
  const handleComplete = useCallback(() => onContinue(), [onContinue]);
  const handleSkip = useCallback(() => onContinue('5-main-1'), [onContinue]);

  return <BreathingExercise onComplete={handleComplete} onSkip={handleSkip} />;
} 