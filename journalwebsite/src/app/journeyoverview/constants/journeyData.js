export const progressMetrics = {
  completion: {
    label: 'COMPLETION',
    value: '3%',
    icon: 'BarChart2'
  },
  streak: {
    label: 'STREAK',
    value: '1 day',
    icon: 'Calendar'
  },
  phase: {
    label: 'CURRENT PHASE',
    value: 'Fear Mapping',
    icon: 'TrendingUp'
  }
};

export const programModules = [
  {
    id: 'identify-fear',
    title: 'Identify your Fear',
    description: 'Map and understand your fears to transform them into insights',
    icon: 'Target',
    dayRange: 'Days 1-6',
    tasks: [
      {
        day: 1,
        title: 'Fear Mapping',
        description: 'Document every small and big fear about your project',
        status: 'current'
      },
      {
        day: 2,
        title: 'Root Cause Excavation',
        description: 'Guided journaling to uncover past experiences with failure',
        status: 'upcoming'
      },
      {
        day: 3,
        title: 'The Catastrophizing Reality Check',
        description: 'Analyze past \'failures\' and their actual outcomes',
        status: 'upcoming'
      },
      {
        day: 4,
        title: 'The Fear Flip',
        description: 'Record your negative self-talk for a day',
        status: 'upcoming'
      },
      {
        day: 5,
        title: 'Your Invisible Rules',
        description: 'Identify and document self-imposed limitations',
        status: 'upcoming'
      },
      {
        day: 6,
        title: 'Challenging Limiting Beliefs',
        description: 'Transform limiting beliefs into empowering ones',
        status: 'upcoming'
      }
    ]
  },
  {
    id: 'reframing',
    title: 'Reframing',
    description: 'Change your perspective on failure and growth',
    icon: 'RefreshCcw',
    dayRange: 'Days 7-10',
    tasks: [
      {
        day: 7,
        title: 'Failure Heroes Study',
        description: 'Research 3 admired people who failed before success',
        status: 'upcoming'
      },
      {
        day: 8,
        title: 'Growth Mindset Training',
        description: 'Document learning opportunities in daily setbacks',
        status: 'upcoming'
      },
      {
        day: 9,
        title: 'Challenge Design Day',
        description: 'Create and execute 3 small challenges with increasing difficulty',
        status: 'upcoming'
      },
      {
        day: 10,
        title: 'Celebration Training Day',
        description: 'Document wins and design celebration rituals',
        status: 'upcoming'
      }
    ]
  },
  {
    id: 'new-future-vision',
    title: 'New Future/Vision',
    description: 'Create a compelling vision of your future',
    icon: 'Lightbulb',
    dayRange: 'Days 11-16',
    tasks: [
      {
        day: 11,
        title: 'Values Alignment',
        description: 'Define what truly matters to you and why this project aligns',
        status: 'upcoming'
      },
      {
        day: 12,
        title: 'Future Self Visualization',
        description: 'Detailed writing about your life 5 years from now',
        status: 'upcoming'
      },
      {
        day: 13,
        title: 'Identity Reinforcement',
        description: 'Document who you are becoming vs who fear made you',
        status: 'upcoming'
      },
      {
        day: 14,
        title: 'Identity in Action',
        description: 'Practice embodying this new version of yourself',
        status: 'upcoming'
      },
      {
        day: 15,
        title: 'Success Redefinition',
        description: 'Create your own metrics for success beyond pass/fail',
        status: 'upcoming'
      },
      {
        day: 16,
        title: 'Risk Assessment',
        description: 'Calculate real consequences of project failure vs. regret of never trying',
        status: 'upcoming'
      }
    ]
  },
  {
    id: 'growth',
    title: 'Growth',
    description: 'Build skills and resilience for your journey',
    icon: 'Brain',
    dayRange: 'Days 17-21',
    tasks: [
      {
        day: 17,
        title: 'Skill Strategy Day',
        description: 'List skills you have and design learning path for skills you need',
        status: 'upcoming'
      },
      {
        day: 18,
        title: 'Skill Building Challenge',
        description: 'Practice smallest component of one needed skill',
        status: 'upcoming'
      },
      {
        day: 19,
        title: 'Perfectionism Challenge',
        description: 'Deliberately do something imperfectly',
        status: 'upcoming'
      },
      {
        day: 20,
        title: 'Support Circle Planning',
        description: 'Identify and reach out to potential mentors/supporters',
        status: 'upcoming'
      },
      {
        day: 21,
        title: 'Rejection Exposure',
        description: 'Do something with guaranteed rejection to build resilience',
        status: 'upcoming'
      }
    ]
  },
  {
    id: 'prepping',
    title: 'Prepping',
    description: 'Set up your environment and systems for success',
    icon: 'Wrench',
    dayRange: 'Days 22-28',
    tasks: [
      {
        day: 22,
        title: 'Environment Design',
        description: 'Set up your physical/digital workspace for success',
        status: 'upcoming'
      },
      {
        day: 23,
        title: 'Project Chunking',
        description: 'Break your project into small, manageable pieces',
        status: 'upcoming'
      },
      {
        day: 24,
        title: 'Timeline Creation',
        description: 'Set realistic milestones with buffer time',
        status: 'upcoming'
      },
      {
        day: 25,
        title: 'Obstacle Planning',
        description: 'Create specific plans for likely roadblocks',
        status: 'upcoming'
      },
      {
        day: 26,
        title: 'Accountability Setup',
        description: 'Create check-in system with a partner or app',
        status: 'upcoming'
      },
      {
        day: 27,
        title: 'Fear to Fuel',
        description: 'Turn each remaining fear into a specific action',
        status: 'upcoming'
      },
      {
        day: 28,
        title: 'Success Visualization',
        description: 'Detailed mental rehearsal of project execution',
        status: 'upcoming'
      }
    ]
  },
  {
    id: 'stepping-into-action',
    title: 'Stepping into Action',
    description: 'Create and execute your launch plan',
    icon: 'Rocket',
    dayRange: 'Days 29-30',
    tasks: [
      {
        day: 29,
        title: 'First Step Planning',
        description: 'Design your first week of project work in detail',
        status: 'upcoming'
      },
      {
        day: 30,
        title: 'Launch Day Preparation',
        description: 'Create a detailed, hour-by-hour plan for day one',
        status: 'upcoming'
      }
    ]
  }
]; 