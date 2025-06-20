import { SECTION_TYPES } from '../constants/journeyConstants';

const PAGE_MAP = {
  1: [
    // Check-in
    { id: '1-checkin-1',  section: SECTION_TYPES.CHECK_IN },
    { id: '1-checkin-2',  section: SECTION_TYPES.CHECK_IN },
    { id: '1-checkin-3',  section: SECTION_TYPES.CHECK_IN },

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
        preload: [11], // Preload career summary for 2-main-21
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
        preload: [11], // Preload most painful failure summary for 2-main-23
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
        preload: [11], // Preload most recent failure summary for 2-main-25
      },
    },
    { id: '2-main-19',      section: SECTION_TYPES.MAIN_EXERCISE },
    {
      id: '2-main-20',
      section: SECTION_TYPES.MAIN_EXERCISE,
      ai: {
        promptIndex: 10,
        inputKey:    'triggerAnalysis',
        feedbackKey: 'comprehensiveAnalysisFeedback',
      },
    },
    {
      id: '2-main-21',
      section: SECTION_TYPES.MAIN_EXERCISE,
      ai: {
        promptIndex: 11,
        inputKey:    'careerFailureStory',
        feedbackKey: 'careerFailureSummary',
      },
    },
    {
      id: '2-main-22',
      section: SECTION_TYPES.MAIN_EXERCISE,
      ai: {
        promptIndex: 12,
        inputKey:    'lessonsFromFirstMemory',
        feedbackKey: 'lessonsLearnedFeedback',
      },
    },
    { id: '2-main-23',      section: SECTION_TYPES.MAIN_EXERCISE },
    {
      id: '2-main-24',
      section: SECTION_TYPES.MAIN_EXERCISE,
      ai: {
        promptIndex: 13,
        inputKey:    'lessonsFromMostPainfulMemory',
        feedbackKey: 'mostPainfulLessonsLearnedFeedback',
      },
    },
    { id: '2-main-25',      section: SECTION_TYPES.MAIN_EXERCISE },
    {
      id: '2-main-26',
      section: SECTION_TYPES.MAIN_EXERCISE,
      ai: {
        promptIndex: 14,
        inputKey:    'lessonsReframingAnalysis',
        feedbackKey: 'wisdomIntegrationFeedback',
      },
    },
    { id: '2-reflection-1', section: SECTION_TYPES.REFLECTION },
    {
      id: '2-reflection-2',
      section: SECTION_TYPES.REFLECTION,
      ai: {
        promptIndex: 15,
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
    // Main exercise
    {
      id: '3-main-1',
      section: SECTION_TYPES.MAIN_EXERCISE,
      ai: {
        promptIndex: 1,
        inputKey:    'day3EarlyMessagesReflection',
        feedbackKey: 'day3EarlyMessagesFeedback',
      },
    },
    {
      id: '3-main-2',
      section: SECTION_TYPES.MAIN_EXERCISE,
      ai: {
        promptIndex: 2,
        inputKey:    'day3AdultFailureReflection',
        feedbackKey: 'day3AdultFailureFeedback',
      },
    },
    {
      id: '3-main-3',
      section: SECTION_TYPES.MAIN_EXERCISE,
      ai: {
        promptIndex: 3,
        inputKey:    'day3CareerFailureStory',
        feedbackKey: 'day3CareerFailureFeedback',
        preload: [11], // Preload career summary for 3-main-12
      },
    },
    {
      id: '3-main-4',
      section: SECTION_TYPES.MAIN_EXERCISE,
      ai: {
        promptIndex: 4,
        inputKey:    'day3OthersReactionReflection',
        feedbackKey: 'day3OthersReactionFeedback',
      },
    },
    {
      id: '3-main-5',
      section: SECTION_TYPES.MAIN_EXERCISE,
      ai: {
        promptIndex: 5,
        inputKey:    'day3SelfDecisionReflection',
        feedbackKey: 'day3SelfDecisionFeedback',
      },
    },
    {
      id: '3-main-6',
      section: SECTION_TYPES.MAIN_EXERCISE,
      ai: {
        promptIndex: 6,
        inputKey:    'day3MostPainfulFailureReflection',
        feedbackKey: 'day3MostPainfulFailureFeedback',
        preload: [11], // Preload most painful failure summary for 3-main-13
      },
    },
    {
      id: '3-main-7',
      section: SECTION_TYPES.MAIN_EXERCISE,
      ai: {
        promptIndex: 7,
        inputKey:    'day3WhatWasAtStakeReflection',
        feedbackKey: 'day3WhatWasAtStakeFeedback',
      },
    },
    {
      id: '3-main-8',
      section: SECTION_TYPES.MAIN_EXERCISE,
      ai: {
        promptIndex: 8,
        inputKey:    'day3CopingMechanismsReflection',
        feedbackKey: 'day3CopingMechanismsFeedback',
      },
    },
    {
      id: '3-main-9',
      section: SECTION_TYPES.MAIN_EXERCISE,
      ai: {
        promptIndex: 9,
        inputKey:    'day3MostRecentFailureReflection',
        feedbackKey: 'day3MostRecentFailureFeedback',
        preload: [11], // Preload most recent failure summary for 3-main-14
      },
    },
    { id: '3-main-10',     section: SECTION_TYPES.MAIN_EXERCISE },
    {
      id: '3-main-11',
      section: SECTION_TYPES.MAIN_EXERCISE,
      ai: {
        promptIndex: 10,
        inputKey:    'day3TriggerAnalysis',
        feedbackKey: 'day3ComprehensiveAnalysisFeedback',
      },
    },
    {
      id: '3-main-12',
      section: SECTION_TYPES.MAIN_EXERCISE,
      ai: {
        promptIndex: 12,
        inputKey:    'day3LessonsFromFirstMemory',
        feedbackKey: 'day3LessonsLearnedFeedback',
      },
    },
    {
      id: '3-main-13',
      section: SECTION_TYPES.MAIN_EXERCISE,
      ai: {
        promptIndex: 13,
        inputKey:    'day3LessonsFromMostPainfulMemory',
        feedbackKey: 'day3MostPainfulLessonsLearnedFeedback',
      },
    },
    {
      id: '3-main-14',
      section: SECTION_TYPES.MAIN_EXERCISE,
      ai: {
        promptIndex: 14,
        inputKey:    'lessonsFromDay3MostRecentMemory',
        feedbackKey: 'day3MostRecentLessonsLearnedFeedback',
      },
    },
    {
      id: '3-main-15',
      section: SECTION_TYPES.MAIN_EXERCISE,
      ai: {
        promptIndex: 15,
        inputKey:    'day3LessonsReframingAnalysis',
        feedbackKey: 'day3WisdomIntegrationFeedback',
      },
    },
    // Reflection
    {
      id: '3-reflection-1',
      section: SECTION_TYPES.REFLECTION,
      ai: {
        promptIndex: 16,
        inputKey:    'day3ReflectionResponse',
        feedbackKey: 'day3ReflectionFeedback',
      },
    },
    // Completion page (marks Day 3 complete; not a real section)
    { 
      id: 'complete', 
      section: SECTION_TYPES.COMPLETE, 
      isCompletionPage: true 
    },
    // Main exercise and reflection sections will be added next
  ],

  // …repeat for days 3 through 30, each as an array of { id, ai? } objects
};

export default PAGE_MAP;