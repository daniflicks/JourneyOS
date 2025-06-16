// lib/exercisePrompts.js

export const EXERCISE_PROMPTS = {
  1: [
    /* 0 */ `You're guiding the user through a fear mapping exercise. Briefly acknowledge their check-in selections with warmth and move forward without questions. Keep your response under 3 sentences.`,

    /* 1 */ `Please review the user's project vision: {userText}

    Respond with: 1) A direct affirmation of their project idea, noting its value or potential. 2) A single observation about how this project addresses a real need. Keep your entire response to 2-3 sentences maximum. Do not ask any questions.`,

    /* 2 */ `The user has shared their motivation for pursuing their project: {userText}

    Respond with: 1) A brief acknowledgment of their motivation. 2) Identify both the practical and emotional/personal elements driving their project. 3) A single sentence about how this combination strengthens their foundation. Be concise and direct. Do not ask questions.`,

    /* 3 */ `The user has listed their fears about their project. Simply acknowledge their courage in naming these fears. One sentence about how naming fears is the first step to addressing them. Keep your response to 2-3 sentences maximum with no questions.`,

    /* 4 */ `Here is the list of fears the user provided:\n\n{userText}\n\n` +
          `First, categorize these fears into a JSON object with these categories (provide ONLY the JSON with no introduction):\n\n` +
          '```json\n' +
          `{\n` +
          `  "Core Fears": [],\n` +
          `  "Project-Specific Fears": [],\n` +
          `  "External Fears": [],\n` +
          `  "Resource Fears": [],\n` +
          `  "Identity Fears": []\n` +
          `}\n` +
          '```\n\n' +
          `After the JSON block, begin with: "Based on the fears you've shared, I can help analyze the patterns:" Then identify 2-3 specific themes you notice across categories, numbering each one. For each theme, note which categories it spans. End by identifying the most central fear that connects multiple categories. Be specific and direct in your analysis. Do not ask questions.`,

    /* 5 */ `The user has reflected on their Day 1 experience: {userText}

    Acknowledge a specific insight from their reflection. Note how this awareness will help them moving forward. Provide one clear, actionable suggestion they can use when fear arises tomorrow. Keep your response direct and under 4 sentences with no questions.`,
  ],

  2: [
    /* 0 */ `You're guiding the user through Day 2: Root Cause Excavation. Your job is to help them explore where their fears originated. Be supportive without asking follow-up questions.`,
    
    /* 1 */ `The user has shared their earliest memories about failure and what they learned about failure as a child: {userText}

    Respond with: 1) A gentle acknowledgment of their courage in exploring these early experiences. 2) Identify 1-2 key patterns you notice in how failure was treated in their early environment. 3) One insight about how these early messages might be influencing their current relationship with risk and failure. Keep your response warm, non-judgmental, and under 4 sentences. Do not ask questions.`,

    /* 2 */ `The user has reflected on how the adults around them (parents, family) dealt with their own failures or mistakes: {userText}

    Respond with: 1) A compassionate acknowledgment of their observations about the adult models in their life. 2) Identify the underlying "story" about failure that existed in their family/community - what failure meant and how it should be handled based on these patterns. 3) One insight about how this family story about failure might be influencing their current relationship with risk and setbacks. Keep your response understanding and under 4 sentences. Do not ask questions.`,

    /* 3 */ `The user has shared a significant career failure experience. Story: {userText} | Age when it happened: {userAge}

    Respond with: 1) A gentle acknowledgment of their courage in revisiting this difficult memory. 2) Identify key patterns in how this experience shaped their relationship with professional risk-taking (considering their age and career stage when it happened). 3) One insight about how this specific failure might be connected to their current fears about their project. Keep your response supportive and under 4 sentences. Do not ask questions.`,

    /* 4 */ `The user has reflected on how others reacted to their career failure: {userText}

    Respond with: 1) A compassionate acknowledgment of how others' reactions can deeply impact our relationship with failure. 2) Identify key patterns in the type of support or criticism they received and what this reveals about their social environment during vulnerability. 3) One insight about how these external reactions might be influencing their current hesitation to take risks or share struggles. Keep your response supportive and under 4 sentences. Do not ask questions.`,

    /* 5 */ `The user has reflected on what they decided about themselves after their career failure: {userText}

    Respond with: 1) A gentle acknowledgment of how powerful our self-narratives can be, especially after difficult experiences. 2) Identify the core self-limiting beliefs or identity shifts that emerged from this experience and how they might have become protective mechanisms. 3) One insight about how these internalized decisions about themselves might be creating invisible barriers to pursuing their current project. Keep your response compassionate and under 4 sentences. Do not ask questions.`,

    /* 6 */ `The user has shared their most painful career failure: {userText}

    Respond with: 1) A deeply compassionate acknowledgment of the courage it takes to revisit such a painful experience. 2) Identify what made this failure particularly devastating - the deeper values, dreams, or aspects of identity that were threatened or lost. 3) One insight about how the emotional intensity of this experience might be creating a protective fear response that's now influencing their current project decisions. Keep your response tender and under 4 sentences. Do not ask questions.`,

    /* 7 */ `The user has reflected on what was at stake when they made the decision that led to their most painful failure: {userText}

    Respond with: 1) A compassionate acknowledgment of how high the stakes felt and how much courage it took to risk something so meaningful to them. 2) Identify the core values, dreams, or aspects of identity that were on the line, and how this reveals what matters most deeply to them. 3) One insight about how the fear of losing something equally precious might be influencing their hesitation with their current project. Keep your response understanding and under 4 sentences. Do not ask questions.`,

    /* 8 */ `The user has reflected on how they coped in the weeks or months after their most painful failure: {userText}

    Respond with: 1) A gentle acknowledgment of their resilience and the various ways they tried to heal from this difficult experience. 2) Identify patterns in their coping strategies - whether they tended to withdraw or connect, avoid or process, and what this reveals about their natural responses to vulnerability. 3) One insight about how these same coping patterns might be influencing how they're approaching (or avoiding) their current project. Keep your response supportive and under 4 sentences. Do not ask questions.`,

    /* 9 */ `The user has shared their most recent career setback: {userText}

    Respond with: 1) A supportive acknowledgment that setbacks are part of every career journey and recognize their willingness to examine recent experiences. 2) Identify how their response to this recent failure shows growth or persistence of patterns from earlier experiences they've shared. 3) One insight about how this recent experience might be either reinforcing old fears or offering new evidence of their resilience as they consider their current project. Keep your response encouraging and under 4 sentences. Do not ask questions.`,

    /* 10 */ `PLACEHOLDER FOR COMPREHENSIVE ANALYSIS - This will analyze all Day 2 inputs collectively focusing on patterns and echoes from past experiences. Context memory system will be built before finalizing this prompt.`,

    // Add more Day 2 prompts here as needed...
  ],

  // Additional days following the 30-day structure
};