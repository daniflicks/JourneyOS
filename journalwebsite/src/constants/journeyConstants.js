// Journey constants for the application

// Constants for section types
export const SECTION_TYPES = {
  CHECK_IN:     'checkin',
  MAIN_EXERCISE:'main',
  REFLECTION:   'reflection',
  COMPLETE:     'complete',   // ← new “section” type
}

// Constants for day status
export const DAY_STATUS = {
  NOT_STARTED: 'not-started',
  IN_PROGRESS: 'in-progress',
  COMPLETED: 'completed'
};

// Constants for section status
export const SECTION_STATUS = {
  NOT_STARTED: 'not-started',
  IN_PROGRESS: 'in-progress',
  COMPLETED: 'completed'
};

// Program phases definition
export const PROGRAM_PHASES = [
  {
    id: 'identify-fear',
    title: 'Identify your Fear',
    dayRange: { start: 1, end: 6 }
  },
  {
    id: 'reframing',
    title: 'Reframing',
    dayRange: { start: 7, end: 10 }
  },
  {
    id: 'new-future-vision',
    title: 'New Future/Vision',
    dayRange: { start: 11, end: 16 }
  },
  {
    id: 'growth',
    title: 'Growth',
    dayRange: { start: 17, end: 21 }
  },
  {
    id: 'prepping',
    title: 'Prepping',
    dayRange: { start: 22, end: 28 }
  },
  {
    id: 'stepping-into-action',
    title: 'Stepping into Action',
    dayRange: { start: 29, end: 30 }
  }
];

// Constants for progress tracking
export const TOTAL_DAYS = 30;
