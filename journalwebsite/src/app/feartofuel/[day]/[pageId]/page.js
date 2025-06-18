'use client';

import dynamic from 'next/dynamic';
import PAGE_MAP from '../../../../config/pageMap';
import { useJourneyRouting, useExerciseFlow, useClaudeFeedback } from '../../../../hooks/journeyHooks';
import React, { useMemo } from 'react';


export default function StepPage() {
  const { dayNum, pageId } = useJourneyRouting();
  const { answers, onChange, onContinue, idx, section } = useExerciseFlow();

  // Lookup metadata for AI prompts
  const pageMeta = (PAGE_MAP[dayNum] || []).find(p => p.id === pageId) || {};

  // Prepare the user text for AI if needed
  const rawText = pageMeta.ai ? answers[pageMeta.ai.inputKey] : '';
  const userText = Array.isArray(rawText)
    ? rawText.filter(Boolean).join('\n')
    : rawText || '';

  // Fetch AI response when necessary
  const { response: aiResponse, loading: aiLoading, error: aiError } =
    pageMeta.ai
      ? useClaudeFeedback({
          day: dayNum,
          section,
          promptIndex: pageMeta.ai.promptIndex,
          userText,
        })
      : { response: '', loading: false, error: '' };

  // Preload additional prompts
  pageMeta.ai?.preload?.forEach(promptIndex => {
    useClaudeFeedback({ day: dayNum, section, promptIndex, userText });
  });

  // Dynamically import the correct step component (including 'complete')
  const StepUI = useMemo(
    () => dynamic(
      () => import(
        `../../../../content/feartofuel/day${dayNum}/${pageId}.js`
    ),
      { ssr: false, loading: () => <div>Loading…</div> }
    ),
    [dayNum, pageId]
  );

  return (
    <StepUI
      answers={answers}
      onChange={onChange}
      onContinue={onContinue}
      aiResponse={aiResponse}
      aiLoading={aiLoading}
      aiError={aiError}
      idx={idx}
      section={section}
    />
  );
}