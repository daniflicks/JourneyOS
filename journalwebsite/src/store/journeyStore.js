// src/store/journeyStore.js
import { create } from 'zustand';
import { persist, devtools } from 'zustand/middleware';
import { SECTION_TYPES, TOTAL_DAYS, PROGRAM_PHASES } from '../constants/journeyConstants';
import PAGE_MAP from '../config/pageMap';

// Generate completedSections skeleton: days 1–TOTAL_DAYS with all sections false
const generateCompletedSections = () => {
  const sections = {};
  for (let day = 1; day <= TOTAL_DAYS; day++) {
    sections[day] = {
      [SECTION_TYPES.CHECK_IN]: false,
      [SECTION_TYPES.MAIN_EXERCISE]: false,
      [SECTION_TYPES.REFLECTION]: false,
    };
  }
  return sections;
};

// Generate page status skeleton given an array of page IDs
const generatePageStatus = (pageIds) => {
  const status = {};
  pageIds.forEach((pageId) => {
    status[pageId] = { isComplete: false };
  });
  return status;
};

// Flatten all page lists into a single array of IDs for skeleton generation
const allPageIds = Object.values(PAGE_MAP).flatMap((dayPages) =>
  dayPages.map((p) => p.id)
);

// Initial state defaults including calendar-based streak tracking
const initialState = {
  currentDay: 1,
  currentPage: null,
  completedDays: [],
  completedSections: generateCompletedSections(),
  userInputs: {},
  pageStatus: generatePageStatus(allPageIds),
  streak: 0,
  lastCompletedDate: null,
  userMemory: '',
  memoryRev: 0,
};

export const useJourneyStore = create(
  devtools(
    persist(
      (set, get) => ({
        ...initialState,

        /** Navigation Actions **/
        setCurrentDay: (day) => set({ currentDay: day }),
        setCurrentPage: (pageId) => set({ currentPage: pageId }),

        /** Memory Actions **/
        updateUserMemory: (memory) => set((state) => ({
          userMemory: memory,
          memoryRev: (state.memoryRev || 0) + 1,
        })),

        /** User Input **/
        saveUserInput: (day, section, data) =>
          set((state) => ({
            userInputs: {
              ...state.userInputs,
              [day]: {
                ...state.userInputs[day],
                [section]: {
                  ...((state.userInputs[day] && state.userInputs[day][section]) || {}),
                  ...data,
                },
              },
            },
          })),

        /** Section Completion **/
        markSectionComplete: (day, section) =>
          set((state) => ({
            completedSections: {
              ...state.completedSections,
              [day]: {
                ...state.completedSections[day],
                [section]: true,
              },
            },
          })),

        /** Page Completion **/
        markPageComplete: (pageId) =>
          set((state) => ({
            pageStatus: {
              ...state.pageStatus,
              [pageId]: { isComplete: true },
            },
          })),

        /** Day Completion with Local-Time Streak Logic **/
        markDayComplete: (day) =>
          set((state) => {
            const now = new Date();
            const year = now.getFullYear();
            const month = String(now.getMonth() + 1).padStart(2, '0');
            const date = String(now.getDate()).padStart(2, '0');
            const todayLocal = `${year}-${month}-${date}`;

            const yesterday = new Date(now);
            yesterday.setDate(now.getDate() - 1);
            const yYear = yesterday.getFullYear();
            const yMonth = String(yesterday.getMonth() + 1).padStart(2, '0');
            const yDate = String(yesterday.getDate()).padStart(2, '0');
            const yesterdayLocal = `${yYear}-${yMonth}-${yDate}`;

            const doneToday = state.lastCompletedDate === todayLocal;
            const alreadyDone = state.completedDays.includes(day);

            let newStreak;
            if (doneToday) {
              newStreak = state.streak;
            } else if (state.lastCompletedDate === yesterdayLocal) {
              newStreak = state.streak + 1;
            } else {
              newStreak = 1;
            }

            return {
              completedDays: doneToday || alreadyDone
                ? state.completedDays
                : [...state.completedDays, day],
              lastCompletedDate: todayLocal,
              streak: newStreak,
            };
          }),

        /** Selectors / Computed Getters **/
        getCurrentDay: () => get().currentDay,
        getActualCurrentDay: () => {
          const completed = get().completedDays;
          if (completed.length === 0) return 1; // Start at day 1 if nothing completed
          const highestCompleted = Math.max(...completed);
          return Math.min(highestCompleted + 1, TOTAL_DAYS); // Next day or cap at total days
        },
        getResumePage: () => {
          const currentPage = get().currentPage;
          const actualCurrentDay = get().getActualCurrentDay();
          
          // If we have a currentPage and it belongs to the actual current day, return it
          if (currentPage) {
            const dayFromPageId = parseInt(currentPage.split('-')[0]);
            if (dayFromPageId === actualCurrentDay) {
              return currentPage;
            }
          }
          
          // Otherwise, return null so we start from the beginning of the current day
          return null;
        },
        isSectionComplete: (day = get().currentDay, section) =>
          !!get().completedSections[day]?.[section],
        getJourneyPercent: () => {
          const daysDone = get().completedDays.length;
          return Math.min(
            100,
            Math.round((daysDone / TOTAL_DAYS) * 100)
          );
        },
        getCurrentPhase: () => {
          const cd = get().getActualCurrentDay();
          const phaseObj = PROGRAM_PHASES.find(
            (p) => cd >= p.dayRange.start && cd <= p.dayRange.end
          );
          return phaseObj?.title || '';
        },
        getDayPercent: (day = get().currentDay) => {
          const pages = PAGE_MAP[day] || [];
          const pageIds = pages.map((p) => p.id);
          if (!pageIds.length) return 0;
          const completedCount = pageIds.filter(
            (pid) => get().pageStatus[pid]?.isComplete
          ).length;
          return Math.round((completedCount / pageIds.length) * 100);
        },
        getStreak: () => get().streak,
      }),
      {
        name: 'journey-storage',
        version: 6,
        migrate: (persistedState, version) => {
          if (version < 6) {
            return {
              ...persistedState,
              streak: persistedState.streak ?? 0,
              lastCompletedDate: persistedState.lastCompletedDate ?? null,
            };
          }
          return persistedState;
        },
      }
    ),
    { name: 'JourneyStoreDevtools' }
  )
);
