'use client';

import { useState, useCallback, useEffect, useRef} from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useJourneyStore } from '../store/journeyStore';
import { SECTION_TYPES, TOTAL_DAYS } from '../constants/journeyConstants';
import PAGE_MAP from '../config/pageMap';
import {
  getDayPages,
  normalizePageId,
  getPrevPageId,
  getNextPageId,
  getProgressPercent,
} from '../utils/journeyRoutes';

// Stable empty object to avoid selector returning new references
const EMPTY_ANSWERS = {};

/**
 * Hook: useProgressMetrics
 * Returns overall journey completion (%), current streak, and current phase.
 */
export function useProgressMetrics() {
  const journeyPercent = useJourneyStore((s) => s.getJourneyPercent());
  const streak         = useJourneyStore((s) => s.getStreak());
  const currentPhase   = useJourneyStore((s) => s.getCurrentPhase());
  return { journeyPercent, streak, currentPhase };
}

/**
 * Hook: useDashboardData
 * Data for the Dashboard card: current day, resume URL, per‑section status, and phase title.
 */
export function useDashboardData() {
  const currentDay       = useJourneyStore((s) => s.getActualCurrentDay());
  const resumePage       = useJourneyStore((s) => s.getResumePage());
  const isCheckInDone    = useJourneyStore((s) =>
    s.isSectionComplete(currentDay, SECTION_TYPES.CHECK_IN)
  );
  const isMainDone       = useJourneyStore((s) =>
    s.isSectionComplete(currentDay, SECTION_TYPES.MAIN_EXERCISE)
  );
  const isReflectionDone = useJourneyStore((s) =>
    s.isSectionComplete(currentDay, SECTION_TYPES.REFLECTION)
  );
  const phaseTitle       = useJourneyStore((s) => s.getCurrentPhase());

  return {
    currentDay,
    resumePage,
    sectionsStatus: {
      checkIn: isCheckInDone,
      mainExercise: isMainDone,
      reflection: isReflectionDone,
    },
    phaseTitle,
  };
}

/**
 * Hook: useDayOverview
 * Returns an array [1..TOTAL_DAYS] and the currently active day.
 */
export function useDayOverview() {
  const currentDay = useJourneyStore((s) => s.getActualCurrentDay());
  const daysList   = Array.from({ length: TOTAL_DAYS }, (_, i) => i + 1);
  return { daysList, currentDay };
}

/**
 * Hook that centralizes routing logic for the journey flow.
 * - Normalizes raw URL slug to a valid pageId
 * - Computes previous/next pageIds
 * - Computes percent progress for the current day
 */
export function useJourneyRouting() {
  // 1) Read dynamic route params
  const { day, pageId: rawPageId } = useParams();
  const dayNum = Number(day);

  // 2) Normalize the slug to a valid pageId
  const pageId = normalizePageId(dayNum, rawPageId);

  // 3) Grab your store setters
  const setCurrentPage = useJourneyStore((s) => s.setCurrentPage);
  const setCurrentDay  = useJourneyStore((s) => s.setCurrentDay);

  // 4) Sync store → URL on every change
  useEffect(() => {
    if (pageId) {
      setCurrentPage(pageId);
      setCurrentDay(dayNum);
    }
  }, [pageId, dayNum, setCurrentPage, setCurrentDay]);

  // 5) All your existing nav/progress logic
  const pages      = getDayPages(dayNum);
  const prevPageId = getPrevPageId(dayNum, pageId);
  const nextPageId = getNextPageId(dayNum, pageId);
  const progress   = getProgressPercent(dayNum, pageId);

  return { dayNum, pages, pageId, prevPageId, nextPageId, progress };
}

/**
 * Hook that drives the exercise flow:
 * - Saves inputs immediately
 * - Marks pages, sections, and days complete on continue
 * - Navigates to the next page or back to dashboard
 */
export function useExerciseFlow() {
  const router = useRouter();
  const { dayNum, pages, pageId, nextPageId } = useJourneyRouting();

  // 1️⃣ Lookup metadata for the current page
  const pageMeta = PAGE_MAP[dayNum]?.find(p => p.id === pageId);
  if (!pageMeta) {
    throw new Error(`Unknown pageId "${pageId}" for day ${dayNum}`);
  }

  // 2️⃣ Determine index and section
  const idx = pages.indexOf(pageId);
  // Use explicit section; COMPLETE pages get SECTION_TYPES.COMPLETE
  const section = pageMeta.isCompletionPage
    ? SECTION_TYPES.COMPLETE
    : pageMeta.section;

  // 3️⃣ Saving User Inputs
  const answers = useJourneyStore(s =>
    s.userInputs?.[dayNum]?.[section] ?? EMPTY_ANSWERS
  );
  const onChange = (key, value) => {
    const store = useJourneyStore.getState();
    store.saveUserInput(dayNum, section, { [key]: value });
  };


  // 4️⃣ Continue handler: page‐complete, section/day logic, then navigation
  const onContinue = (overrideId) => {
    const store    = useJourneyStore.getState();
    const targetId = overrideId ?? nextPageId;

    // a) Mark this page complete
    store.markPageComplete(pageId);

    if (pageMeta.isCompletionPage) {
      // b1) If it's the "complete" page, finish the day
      store.markDayComplete(dayNum);
    } else {
      // b2) Otherwise, possibly mark section complete
      const nextPageMeta = PAGE_MAP[dayNum]?.find(p => p.id === targetId);
      const nextSection = nextPageMeta
        ? (nextPageMeta.isCompletionPage
            ? SECTION_TYPES.COMPLETE
            : nextPageMeta.section)
        : SECTION_TYPES.REFLECTION;

      // If moving into a new section or into completion, mark this section done
      if (nextSection !== section || nextPageMeta?.isCompletionPage) {
        store.markSectionComplete(dayNum, section);
      }
      // And if jumping into the completion page (or no target), mark day done
      if (!targetId || nextPageMeta?.isCompletionPage) {
        store.markDayComplete(dayNum);
      }
    }

    // c) Navigate forward or back to dashboard
    if (targetId) {
      router.push(`/feartofuel/${dayNum}/${targetId}`);
    } else {
      router.push('/dashboard');
    }
  };

  return {
    answers,
    onChange,
    onContinue,
    idx,
    section,
    pageId,
    nextPageId,
  };
}

/**
 * @param {object} params
 * @param {number} params.day
 * @param {string} params.section
 * @param {number} params.promptIndex
 * @param {string} params.userText
 */
export function useClaudeFeedback({ day, section, promptIndex, userText }) {
  const [response, setResponse] = useState('');
  const [loading,  setLoading]  = useState(false);
  const [error,    setError]    = useState('');
  const prevTextRef = useRef('');

  useEffect(() => {
    // 1) No input? Clear and exit.
    if (!userText) {
      setResponse('');
      return;
    }

    // 2) Only run when userText actually changes.
    if (prevTextRef.current !== userText) {
      prevTextRef.current = userText;
      setResponse('');
      setError('');

      const key = `claude-${day}-${section}-${promptIndex}-${encodeURIComponent(
        userText
      )}`;

      // 3) Check localStorage first. If we have it, use it and skip the fetch.
      const cached = localStorage.getItem(key);
      if (cached) {
        setResponse(cached);
        return;
      }

      // 4) Otherwise, call the API.
      setLoading(true);
      fetch('/api/claudeFeedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ day, promptIndex, userText }),
      })
        .then(res => {
          if (!res.ok) throw new Error(`Server error ${res.status}`);
          return res.json();
        })
        .then(data => {
          const aiText = data.aiText ?? data.feedback ?? '';
          // Save for future reloads
          localStorage.setItem(key, aiText);
          setResponse(aiText);
        })
        .catch(err => {
          console.error(err);
          setError(err.message || 'Unknown error');
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [day, section, promptIndex, userText]);

  return { response, loading, error };
}
