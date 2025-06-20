'use client';

import React from 'react';
import ExerciseLayout from '../components/ExerciseLayout';
import { useExerciseFlow } from '../../../hooks/journeyHooks';

export default function DayLayout({ children }) {
  const { idx } = useExerciseFlow();

  // Hide header/footer on the breathing exercise (idx == 2)
  const showHeader = idx !== 2;
  const showFooter = idx !== 2;

  return (
    <ExerciseLayout showHeader={showHeader} showFooter={showFooter}>
      {children}
    </ExerciseLayout>
  );
}