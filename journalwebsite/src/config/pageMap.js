import { SECTION_TYPES } from '../constants/journeyConstants';

const PAGE_MAP = {
  1: [
    // Check-in
    { id: '1-checkin-1',  section: SECTION_TYPES.CHECK_IN },
    { id: '1-checkin-2',  section: SECTION_TYPES.CHECK_IN },
    { id: '1-checkin-3',  section: SECTION_TYPES.CHECK_IN },

    // Main exercise
    { id: '1-main-1',      section: SECTION_TYPES.MAIN_EXERCISE },
    { id: '1-main-2',      section: SECTION_TYPES.MAIN_EXERCISE },
    {
      id: '1-main-3',
      section: SECTION_TYPES.MAIN_EXERCISE,
      ai: {
        promptIndex: 1,
        inputKey:    'combinedVisionMotivation',
        feedbackKey: 'combinedFeedback',
      },
    },
    { id: '1-main-4',      section: SECTION_TYPES.MAIN_EXERCISE },
    {
      id: '1-main-5',
      section: SECTION_TYPES.MAIN_EXERCISE,
      ai: {
        promptIndex: 3,
        inputKey:    'fearDump',
        feedbackKey: 'fearDumpFeedback',
      },
    },

    // Reflection
    { id: '1-reflection-1', section: SECTION_TYPES.REFLECTION },
    {
      id: '1-reflection-2',
      section: SECTION_TYPES.REFLECTION,
      ai: {
        promptIndex: 4,
        inputKey:    'reflectionResponse',
        feedbackKey: 'reflectionFeedback',
      },
    },

    // Completion page (marks Day 1 complete; not a real section)
    { 
      id: 'complete', 
      section: SECTION_TYPES.COMPLETE, 
      isCompletionPage: true 
    },
  ],


  2: [
    { id: '2-checkin-1',  section: SECTION_TYPES.CHECK_IN },
    { id: '2-checkin-2',  section: SECTION_TYPES.CHECK_IN },
    { id: '2-checkin-3',  section: SECTION_TYPES.CHECK_IN },
    { id: '2-main-1',      section: SECTION_TYPES.MAIN_EXERCISE },
    { id: '2-main-2',      section: SECTION_TYPES.MAIN_EXERCISE },
    {
      id: '2-main-3',
      section: SECTION_TYPES.MAIN_EXERCISE,
      ai: {
        promptIndex: 1,
        inputKey:    'combinedEarlyMessages',
        feedbackKey: 'combinedEarlyMessagesFeedback',
      },
    },
    {
      id: '2-main-4',
      section: SECTION_TYPES.MAIN_EXERCISE,
      ai: {
        promptIndex: 5,                   // summary prompt
        inputKey:    'careerFailureStory', // same as what the page saves
        feedbackKey: 'careerFailureSummary'
      }
    },
    { id: '2-main-5',      section: SECTION_TYPES.MAIN_EXERCISE },
    { id: '2-main-6',      section: SECTION_TYPES.MAIN_EXERCISE },
    {
      id: '2-main-7',
      section: SECTION_TYPES.MAIN_EXERCISE,
      ai: {
        promptIndex: 2,
        inputKey:    'combinedCareerFailure',
        feedbackKey: 'combinedCareerFailureFeedback',
      },
    },
    {
      id: '2-main-8',
      section: SECTION_TYPES.MAIN_EXERCISE,
      ai: {
        promptIndex: 5,                   // summary prompt
        inputKey:    'mostPainfulFailureReflection', // same as what the page saves
        feedbackKey: 'mostPainfulFailureSummary'
      }
    },
    { id: '2-main-9',      section: SECTION_TYPES.MAIN_EXERCISE },
    { id: '2-main-10',      section: SECTION_TYPES.MAIN_EXERCISE },
    {
      id: '2-main-11',
      section: SECTION_TYPES.MAIN_EXERCISE,
      ai: {
        promptIndex: 3,
        inputKey:    'combinedMostPainfulFailure',
        feedbackKey: 'combinedMostPainfulFailureFeedback',
      },
    },
    {
      id: '2-main-12',
      section: SECTION_TYPES.MAIN_EXERCISE,
      ai: {
        promptIndex: 5,                   // summary prompt
        inputKey:    'mostRecentFailureReflection', // same as what the page saves
        feedbackKey: 'mostRecentFailureSummary'
      },
    },
    { id: '2-main-13',      section: SECTION_TYPES.MAIN_EXERCISE },
    {
      id: '2-main-14',
      section: SECTION_TYPES.MAIN_EXERCISE,
      ai: {
        promptIndex: 4,
        inputKey:    'triggerAnalysis',
        feedbackKey: 'comprehensiveAnalysisFeedback',
      },
    },
    {
      id: '2-main-15',
      section: SECTION_TYPES.MAIN_EXERCISE,
      ai: {
        promptIndex: 5,                   // same summary prompt as 2-main-4
        inputKey:    'careerFailureStory', // same raw text as 2-main-4
        feedbackKey: 'careerFailureSummary'
      }
    },
    {
      id: '2-main-16',
      section: SECTION_TYPES.MAIN_EXERCISE,
      ai: {
        promptIndex: 5,                   // same summary prompt as 2-main-8
        inputKey:    'mostPainfulFailureReflection', // same raw text as 2-main-8
        feedbackKey: 'mostPainfulFailureSummary'
      }
    },
    {
      id: '2-main-17',
      section: SECTION_TYPES.MAIN_EXERCISE,
      ai: {
        promptIndex: 5,                   // same summary prompt as 2-main-12
        inputKey:    'mostRecentFailureReflection', // same raw text as 2-main-12
        feedbackKey: 'mostRecentFailureSummary'
      }
    },
    {
      id: '2-main-18',
      section: SECTION_TYPES.MAIN_EXERCISE,
      ai: {
        promptIndex: 6,
        inputKey:    'lessonsReframingAnalysis',
        feedbackKey: 'wisdomIntegrationFeedback',
      },
    },
    { id: '2-reflection-1', section: SECTION_TYPES.REFLECTION },
    {
      id: '2-reflection-2',
      section: SECTION_TYPES.REFLECTION,
      ai: {
        promptIndex: 7,
        inputKey:    'reflectionResponse',
        feedbackKey: 'reflectionFeedback',
      },
    },
    // Completion page (marks Day 2 complete; not a real section)
    { 
      id: 'complete', 
      section: SECTION_TYPES.COMPLETE, 
      isCompletionPage: true 
    },
    // …add the rest of Day 2 steps here
  ],

  3: [
    // Check-in
    { id: '3-checkin-1',  section: SECTION_TYPES.CHECK_IN },
    { id: '3-checkin-2',  section: SECTION_TYPES.CHECK_IN },
    { id: '3-checkin-3',  section: SECTION_TYPES.CHECK_IN },

    // Main exercise
    { id: '3-main-1',      section: SECTION_TYPES.MAIN_EXERCISE },
    { id: '3-main-2',      section: SECTION_TYPES.MAIN_EXERCISE },
    { id: '3-main-3',      section: SECTION_TYPES.MAIN_EXERCISE },
    { id: '3-main-4',      section: SECTION_TYPES.MAIN_EXERCISE },
    {
      id: '3-main-5',
      section: SECTION_TYPES.MAIN_EXERCISE,
      ai: {
        promptIndex: 1,
        inputKey:    'catastrophizingPatternAnalysis',
        feedbackKey: 'catastrophizingAnalysisFeedback',
      },
    },
    { id: '3-main-6',      section: SECTION_TYPES.MAIN_EXERCISE },
    { id: '3-main-7',      section: SECTION_TYPES.MAIN_EXERCISE },
    {
      id: '3-main-8',
      section: SECTION_TYPES.MAIN_EXERCISE,
      ai: {
        promptIndex: 2,
        inputKey:    'fearReframingTrigger',
        feedbackKey: 'fearReframingAnalysis',
      },
    },
    
    // Reflection
    { id: '3-reflection-1', section: SECTION_TYPES.REFLECTION },
    {
      id: '3-reflection-2',
      section: SECTION_TYPES.REFLECTION,
      ai: {
        promptIndex: 3,
        inputKey:    'reflectionResponse',
        feedbackKey: 'reflectionFeedback',
      },
    },

    // Completion page (marks Day 3 complete; not a real section)
    { 
      id: 'complete', 
      section: SECTION_TYPES.COMPLETE, 
      isCompletionPage: true 
    },
  ],

  4: [
    // Check-in
    { id: '4-checkin-1',  section: SECTION_TYPES.CHECK_IN },
    { id: '4-checkin-2',  section: SECTION_TYPES.CHECK_IN },
    { id: '4-checkin-3',  section: SECTION_TYPES.CHECK_IN },

    // Main exercise
    { id: '4-main-1',      section: SECTION_TYPES.MAIN_EXERCISE },
    {
      id: '4-main-2',
      section: SECTION_TYPES.MAIN_EXERCISE,
      ai: {
        promptIndex: 1,
        inputKey:    'fear1',
        feedbackKey: 'cocoHelpFeedback',
      },
    },
    { id: '4-main-3',      section: SECTION_TYPES.MAIN_EXERCISE },
    { id: '4-main-4',      section: SECTION_TYPES.MAIN_EXERCISE },
    {
      id: '4-main-5',
      section: SECTION_TYPES.MAIN_EXERCISE,
      ai: {
        promptIndex: 3,
        inputKey:    'hiddenPatternTrigger',
        feedbackKey: 'hiddenPatternAnalysisFeedback',
      },
    },
    { id: '4-main-6',      section: SECTION_TYPES.MAIN_EXERCISE },
    { id: '4-main-7',      section: SECTION_TYPES.MAIN_EXERCISE },
    { id: '4-main-8',      section: SECTION_TYPES.MAIN_EXERCISE },
    {
      id: '4-main-9',
      section: SECTION_TYPES.MAIN_EXERCISE,
      ai: {
        promptIndex: 6,
        inputKey:    'reframeTrigger',
        feedbackKey: 'reframeFeedback',
      },
    },
    { id: '4-reflection-1', section: SECTION_TYPES.REFLECTION },
    {
      id: '4-reflection-2',
      section: SECTION_TYPES.REFLECTION,
      ai: {
        promptIndex: 7,
        inputKey:    'reflectionResponse',
        feedbackKey: 'reflectionFeedback',
      },
    },
    { id: 'complete', section: SECTION_TYPES.COMPLETE, isCompletionPage: true },
    // Add other Day 4 steps here as they are created
  ],

  5: [
    // Check-in
    { id: '5-checkin-1', section: SECTION_TYPES.CHECK_IN },
    { id: '5-checkin-2', section: SECTION_TYPES.CHECK_IN },
    { id: '5-checkin-3', section: SECTION_TYPES.CHECK_IN },
    // Main exercise
    {
      id: '5-main-1',
      section: SECTION_TYPES.MAIN_EXERCISE,
      ai: {
        promptIndex: 1,
        inputKey: 'beliefAnalysisTrigger',
        feedbackKey: 'beliefAnalysisFeedback',
      },
    },
    {
      id: '5-main-2',
      section: SECTION_TYPES.MAIN_EXERCISE,
      ai: {
        promptIndex: 1,
        inputKey: 'beliefAnalysisTrigger',
        feedbackKey: 'beliefAnalysisFeedback',
      },
    },
    {
      id: '5-main-3',
      section: SECTION_TYPES.MAIN_EXERCISE,
    },
    {
      id: '5-main-4',
      section: SECTION_TYPES.MAIN_EXERCISE,
    },
    {
      id: '5-main-5',
      section: SECTION_TYPES.MAIN_EXERCISE,
    },
    {
      id: '5-main-6',
      section: SECTION_TYPES.MAIN_EXERCISE,
    },
    {
      id: '5-main-7',
      section: SECTION_TYPES.MAIN_EXERCISE,
      ai: {
        promptIndex: 2,
        inputKey: 'reframeTrigger',
        feedbackKey: 'beliefReframeFeedback',
      },
    },
    {
      id: '5-main-8',
      section: SECTION_TYPES.MAIN_EXERCISE,
    },
    { id: '5-reflection-1', section: SECTION_TYPES.REFLECTION },
    {
      id: '5-reflection-2',
      section: SECTION_TYPES.REFLECTION,
      ai: {
        promptIndex: 5,
        inputKey: 'reflectionResponse',
        feedbackKey: 'reflectionFeedback',
      },
    },
    { id: 'complete', section: SECTION_TYPES.COMPLETE, isCompletionPage: true },
    // Continue adding Day 5 pages as they are created
  ],

  // …repeat for days 6 through 30, each as an array of { id, ai? } objects
};

export default PAGE_MAP;