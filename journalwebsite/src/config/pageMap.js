import { SECTION_TYPES } from '../constants/journeyConstants';

const PAGE_MAP = {
  1: [
    // Check-in
    { id: '1-checkin-1',  section: SECTION_TYPES.CHECK_IN },
    { id: '1-checkin-2',  section: SECTION_TYPES.CHECK_IN },

    // Main exercise
    { id: '1-main-1',      section: SECTION_TYPES.MAIN_EXERCISE },
    {
      id: '1-main-2',
      section: SECTION_TYPES.MAIN_EXERCISE,
      ai: {
        promptIndex: 1,
        inputKey:    'projectVision',
        feedbackKey: 'visionFeedback',
      },
    },
    { id: '1-main-3',      section: SECTION_TYPES.MAIN_EXERCISE },
    {
      id: '1-main-4',
      section: SECTION_TYPES.MAIN_EXERCISE,
      ai: {
        promptIndex: 2,
        inputKey:    'projectMotivation',
        feedbackKey: 'motivationFeedback',
      },
    },
    { id: '1-main-5',      section: SECTION_TYPES.MAIN_EXERCISE },
    {
      id: '1-main-6',
      section: SECTION_TYPES.MAIN_EXERCISE,
      ai: {
        promptIndex: 4,
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
        promptIndex: 5,
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
    { id: '2-main-1',      section: SECTION_TYPES.MAIN_EXERCISE },
    {
      id: '2-main-2',
      section: SECTION_TYPES.MAIN_EXERCISE,
      ai: {
        promptIndex: 1,
        inputKey:    'earlyMessagesReflection',
        feedbackKey: 'earlyMessagesFeedback',
      },
    },
    { id: '2-main-3',      section: SECTION_TYPES.MAIN_EXERCISE },
    {
      id: '2-main-4',
      section: SECTION_TYPES.MAIN_EXERCISE,
      ai: {
        promptIndex: 2,
        inputKey:    'adultFailureReflection',
        feedbackKey: 'adultFailureFeedback',
      },
    },
    { id: '2-main-5',      section: SECTION_TYPES.MAIN_EXERCISE },
    {
      id: '2-main-6',
      section: SECTION_TYPES.MAIN_EXERCISE,
      ai: {
        promptIndex: 3,
        inputKey:    'careerFailureStory',
        feedbackKey: 'careerFailureFeedback',
      },
    },
    { id: '2-main-7',      section: SECTION_TYPES.MAIN_EXERCISE },
    {
      id: '2-main-8',
      section: SECTION_TYPES.MAIN_EXERCISE,
      ai: {
        promptIndex: 4,
        inputKey:    'othersReactionReflection',
        feedbackKey: 'othersReactionFeedback',
      },
    },
    { id: '2-main-9',      section: SECTION_TYPES.MAIN_EXERCISE },
    {
      id: '2-main-10',
      section: SECTION_TYPES.MAIN_EXERCISE,
      ai: {
        promptIndex: 5,
        inputKey:    'selfDecisionReflection',
        feedbackKey: 'selfDecisionFeedback',
      },
    },
    { id: '2-main-11',      section: SECTION_TYPES.MAIN_EXERCISE },
    {
      id: '2-main-12',
      section: SECTION_TYPES.MAIN_EXERCISE,
      ai: {
        promptIndex: 6,
        inputKey:    'mostPainfulFailureReflection',
        feedbackKey: 'mostPainfulFailureFeedback',
      },
    },
    { id: '2-main-13',      section: SECTION_TYPES.MAIN_EXERCISE },
    {
      id: '2-main-14',
      section: SECTION_TYPES.MAIN_EXERCISE,
      ai: {
        promptIndex: 7,
        inputKey:    'whatWasAtStakeReflection',
        feedbackKey: 'whatWasAtStakeFeedback',
      },
    },
    { id: '2-main-15',      section: SECTION_TYPES.MAIN_EXERCISE },
    {
      id: '2-main-16',
      section: SECTION_TYPES.MAIN_EXERCISE,
      ai: {
        promptIndex: 8,
        inputKey:    'copingMechanismsReflection',
        feedbackKey: 'copingMechanismsFeedback',
      },
    },
    { id: '2-main-17',      section: SECTION_TYPES.MAIN_EXERCISE },
    {
      id: '2-main-18',
      section: SECTION_TYPES.MAIN_EXERCISE,
      ai: {
        promptIndex: 9,
        inputKey:    'mostRecentFailureReflection',
        feedbackKey: 'mostRecentFailureFeedback',
      },
    },
    { id: '2-main-19',      section: SECTION_TYPES.MAIN_EXERCISE },
    {
      id: '2-main-20',
      section: SECTION_TYPES.MAIN_EXERCISE,
      ai: {
        promptIndex: 10,
        inputKey:    'comprehensiveAnalysis',
        feedbackKey: 'comprehensiveAnalysisFeedback',
      },
    },
    // …add the rest of Day 2 steps here
  ],

  // …repeat for days 3 through 30, each as an array of { id, ai? } objects
};

export default PAGE_MAP;