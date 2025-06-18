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

    Respond with deep validation of their courage in exploring these tender early experiences. These memories shaped so much. If there's one powerful insight that stands out from what they've shared, mention it briefly. Otherwise, focus on acknowledging the weight of these early lessons. Keep it warm and under 2 sentences. Do not ask questions.`,

    /* 2 */ `The user has reflected on how the adults around them (parents, family) dealt with their own failures or mistakes: {userText}

    Acknowledge how deeply these adult models affected them. Children absorb everything. If there's one particularly striking pattern in what they've observed, name it gently. Focus on validating how formative these moments were. Keep it compassionate and under 2 sentences. Do not ask questions.`,

    /* 3 */ `The user has shared a significant career failure experience. Story: {userText} | Age when it happened: {userAge}

    Honor their courage in sharing this painful memory. That takes real strength. If something particularly strikes you about the timing or impact, acknowledge it briefly. Otherwise, focus on witnessing their experience. Keep it supportive and under 2 sentences. Do not ask questions.`,

    /* 4 */ `The user has reflected on how others reacted to their career failure: {userText}

    Validate how much others' reactions matter when we're already vulnerable. Those responses can cut so deep or lift us up. Focus on acknowledging the impact these reactions had on them. Keep it understanding and under 2 sentences. Do not ask questions.`,

    /* 5 */ `The user has reflected on what they decided about themselves after their career failure: {userText}

    Acknowledge how powerful the stories we tell ourselves can be, especially when we're hurting. These beliefs became protection. If there's something particularly striking about what they decided about themselves, reflect it back gently. Keep it compassionate and under 2 sentences. Do not ask questions.`,

    /* 6 */ `The user has shared their most painful career failure: {userText}

    Honor the immense courage it takes to share something this painful. This clearly meant everything to them. Focus on witnessing their experience with deep compassion. Keep it tender and under 2 sentences. Do not ask questions.`,

    /* 7 */ `The user has reflected on what was at stake when they made the decision that led to their most painful failure: {userText}

    Acknowledge the immense courage it took to risk something so precious to them. That's what makes this so hard - it mattered deeply. Focus on honoring what was at stake for them. Keep it understanding and under 2 sentences. Do not ask questions.`,

    /* 8 */ `The user has reflected on how they coped in the weeks or months after their most painful failure: {userText}

    Honor their resilience and the ways they found to survive such a difficult time. We all do what we need to do to heal. Focus on acknowledging their strength during vulnerability. Keep it supportive and under 2 sentences. Do not ask questions.`,

    /* 9 */ `The user has shared their most recent career setback: {userText}

    Acknowledge their openness in examining recent challenges. These experiences are still fresh and can sting. Focus on validating their willingness to look at difficult recent experiences. Keep it encouraging and under 2 sentences. Do not ask questions.`,

    /* 10 */ `Based on all our conversations throughout Day 2 where we explored your relationship with failure and how it originated, provide a comprehensive pattern analysis focused on Day 2 experiences.

    Analyze and present in this structure:

    **Core Pattern Recognition**: Identify 2-3 significant patterns recurring across their failure experiences discussed today.

    **Root Failure Fears**: Based on Day 2 stories and reflections, identify the deepest failure fears driving their relationship with risk.

    **Protective Strategies**: How they protect themselves from failure vulnerability, based on patterns from Day 2 reflections.

    **Growth Opportunities**: Greatest potential for transformation based on Day 2 patterns identified.

    Keep your tone warm and insightful. Be specific about patterns from Day 2 conversations. This should feel like a meaningful breakthrough moment. Do not ask follow-up questions or provide lengthy encouragement.

    Current reflection prompt: {userText}`,

    /* 11 */ `Create a very brief, neutral summary phrase of this career experience: {userText}

    Return ONLY a short phrase that captures the essence of the experience itself. Focus on what they were doing, not what went wrong. Examples:
    - "photoshoot at 20"
    - "startup experience in college" 
    - "presentation at work"
    - "business launch attempt"
    - "Starbucks job interview"
    - "first client project"

    CRITICAL RULES:
    - Do NOT include any negative words like "failed," "disaster," "rejected," "disappointment," "mistake," "failure," "client-rejected," "botched," "unsuccessful"
    - Do NOT mention outcomes, results, or consequences
    - Focus purely on the activity or situation
    - Keep it under 4 words, natural, and specific to their story
    - Do not include quotes or extra text
    - Think of it as describing what they were doing, not what happened`,

    /* 12 */ `The user has reflected on what they learned from their career experience: {userText}

    Acknowledge their courage in finding wisdom in difficult experiences. That's real growth. If there's a particularly powerful insight about resilience, skill development, or self-awareness, highlight it briefly. Focus on validating their ability to transform pain into learning. Keep it encouraging and under 2 sentences. Do not ask questions.`,

    /* 13 */ `The user has reflected on what they learned from their most painful career experience: {userText}

    Acknowledge their courage in finding wisdom in such a deeply painful experience. That's extraordinary growth. If there's a particularly powerful insight about resilience, skill development, or self-awareness, highlight it briefly. Focus on validating their ability to transform deep pain into meaningful learning. Keep it encouraging and under 2 sentences. Do not ask questions.`,

    /* 14 */ `Based on all the wisdom the user has discovered from transforming their three key failure experiences into learning opportunities, provide a comprehensive positive reframing analysis focused on their growth and resilience.

    Analyze and present in this structure:

    **Wisdom Integration**: Identify 2-3 powerful themes of resilience, skill development, or self-awareness that emerge across all three lessons learned.

    **Growth Transformation**: How they've demonstrated the ability to transform pain into wisdom, based on patterns from their lessons learned.

    **Future Foundation**: The solid foundation of wisdom and resilience they've built for future challenges.

    **Encouragement**: Celebrate their courage and growth mindset in finding meaning in difficult experiences.

    Keep your tone extremely positive, encouraging, and celebratory. This should feel like a breakthrough moment where they recognize their own strength and wisdom. Focus on their growth and transformation. Do not ask follow-up questions or provide lengthy analysis.

    Current lessons learned: {userText}`,

    /* 15 */ `The user has reflected on a new way they could think about their failures: {userText}

    Acknowledge their openness to shifting their perspective on failure. This kind of mindset change is powerful and shows real growth. If there's something particularly insightful about their new perspective, highlight it briefly. Focus on validating their willingness to see failure differently and how this new mindset will serve them moving forward. Keep it encouraging and under 2 sentences. Do not ask questions.`,

    // Add more Day 2 prompts here as needed...
  ],

  3: [
    /* 0 */ `You're guiding the user through Day 3: Root Cause Excavation. Your job is to help them explore where their fears originated. Be supportive without asking follow-up questions.`,
    
    /* 1 */ `The user has shared their earliest memories about failure and what they learned about failure as a child: {userText}

    Respond with deep validation of their courage in exploring these tender early experiences. These memories shaped so much. If there's one powerful insight that stands out from what they've shared, mention it briefly. Otherwise, focus on acknowledging the weight of these early lessons. Keep it warm and under 2 sentences. Do not ask questions.`,

    /* 2 */ `The user has reflected on how the adults around them (parents, family) dealt with their own failures or mistakes: {userText}

    Acknowledge how deeply these adult models affected them. Children absorb everything. If there's one particularly striking pattern in what they've observed, name it gently. Focus on validating how formative these moments were. Keep it compassionate and under 2 sentences. Do not ask questions.`,

    /* 3 */ `The user has shared a significant career failure experience. Story: {userText} | Age when it happened: {userAge}

    Honor their courage in sharing this painful memory. That takes real strength. If something particularly strikes you about the timing or impact, acknowledge it briefly. Otherwise, focus on witnessing their experience. Keep it supportive and under 2 sentences. Do not ask questions.`,

    /* 4 */ `The user has reflected on how others reacted to their career failure: {userText}

    Validate how much others' reactions matter when we're already vulnerable. Those responses can cut so deep or lift us up. Focus on acknowledging the impact these reactions had on them. Keep it understanding and under 2 sentences. Do not ask questions.`,

    /* 5 */ `The user has reflected on what they decided about themselves after their career failure: {userText}

    Acknowledge how powerful the stories we tell ourselves can be, especially when we're hurting. These beliefs became protection. If there's something particularly striking about what they decided about themselves, reflect it back gently. Keep it compassionate and under 2 sentences. Do not ask questions.`,

    /* 6 */ `The user has shared their most painful career failure: {userText}

    Honor the immense courage it takes to share something this painful. This clearly meant everything to them. Focus on witnessing their experience with deep compassion. Keep it tender and under 2 sentences. Do not ask questions.`,

    /* 7 */ `The user has reflected on what was at stake when they made the decision that led to their most painful failure: {userText}

    Acknowledge the immense courage it took to risk something so precious to them. That's what makes this so hard - it mattered deeply. Focus on honoring what was at stake for them. Keep it understanding and under 2 sentences. Do not ask questions.`,

    /* 8 */ `The user has reflected on how they coped in the weeks or months after their most painful failure: {userText}

    Honor their resilience and the ways they found to survive such a difficult time. We all do what we need to do to heal. Focus on acknowledging their strength during vulnerability. Keep it supportive and under 2 sentences. Do not ask questions.`,

    /* 9 */ `The user has shared their most recent career setback: {userText}

    Acknowledge their openness in examining recent challenges. These experiences are still fresh and can sting. Focus on validating their willingness to look at difficult recent experiences. Keep it encouraging and under 2 sentences. Do not ask questions.`,

    /* 10 */ `Based on all our conversations throughout Day 3 where we explored your relationship with failure and how it originated, provide a comprehensive pattern analysis focused on Day 3 experiences.

    Analyze and present in this structure:

    **Core Pattern Recognition**: Identify 2-3 significant patterns recurring across their failure experiences discussed today.

    **Root Failure Fears**: Based on Day 3 stories and reflections, identify the deepest failure fears driving their relationship with risk.

    **Protective Strategies**: How they protect themselves from failure vulnerability, based on patterns from Day 3 reflections.

    **Growth Opportunities**: Greatest potential for transformation based on Day 3 patterns identified.

    Keep your tone warm and insightful. Be specific about patterns from Day 3 conversations. This should feel like a meaningful breakthrough moment. Do not ask follow-up questions or provide lengthy encouragement.

    Current reflection prompt: {userText}`,

    /* 11 */ `Create a very brief, neutral summary phrase of this career experience: {userText}

    Return ONLY a short phrase that captures the essence of the experience itself. Focus on what they were doing, not what went wrong. Examples:
    - "photoshoot at 20"
    - "startup experience in college" 
    - "presentation at work"
    - "business launch attempt"
    - "Starbucks job interview"
    - "first client project"

    CRITICAL RULES:
    - Do NOT include any negative words like "failed," "disaster," "rejected," "disappointment," "mistake," "failure," "client-rejected," "botched," "unsuccessful"
    - Do NOT mention outcomes, results, or consequences
    - Focus purely on the activity or situation
    - Keep it under 4 words, natural, and specific to their story
    - Do not include quotes or extra text
    - Think of it as describing what they were doing, not what happened`,

    /* 12 */ `The user has reflected on what they learned from their career experience: {userText}

    Acknowledge their courage in finding wisdom in difficult experiences. That's real growth. If there's a particularly powerful insight about resilience, skill development, or self-awareness, highlight it briefly. Focus on validating their ability to transform pain into learning. Keep it encouraging and under 2 sentences. Do not ask questions.`,

    /* 13 */ `The user has reflected on what they learned from their most painful career experience: {userText}

    Acknowledge their courage in finding wisdom in such a deeply painful experience. That's extraordinary growth. If there's a particularly powerful insight about resilience, skill development, or self-awareness, highlight it briefly. Focus on validating their ability to transform deep pain into meaningful learning. Keep it encouraging and under 2 sentences. Do not ask questions.`,

    /* 14 */ `The user has reflected on what they learned from their most recent career experience: {userText}

    Acknowledge their courage in finding wisdom in recent difficult experiences. That's real growth. If there's a particularly powerful insight about resilience, skill development, or self-awareness, highlight it briefly. Focus on validating their ability to transform recent challenges into learning. Keep it encouraging and under 2 sentences. Do not ask questions.`,

    /* 15 */ `Based on all the wisdom the user has discovered from transforming their three key failure experiences into learning opportunities, provide a comprehensive positive reframing analysis focused on their growth and resilience.

    Analyze and present in this structure:

    **Wisdom Integration**: Identify 2-3 powerful themes of resilience, skill development, or self-awareness that emerge across all three lessons learned.

    **Growth Transformation**: How they've demonstrated the ability to transform pain into wisdom, based on patterns from their lessons learned.

    **Future Foundation**: The solid foundation of wisdom and resilience they've built for future challenges.

    **Encouragement**: Celebrate their courage and growth mindset in finding meaning in difficult experiences.

    Keep your tone extremely positive, encouraging, and celebratory. This should feel like a breakthrough moment where they recognize their own strength and wisdom. Focus on their growth and transformation. Do not ask follow-up questions or provide lengthy analysis.

    Current lessons learned: {userText}`,

    /* 16 */ `The user has reflected on a new way they could think about their failures: {userText}

    Acknowledge their openness to shifting their perspective on failure. This kind of mindset change is powerful and shows real growth. If there's something particularly insightful about their new perspective, highlight it briefly. Focus on validating their willingness to see failure differently and how this new mindset will serve them moving forward. Keep it encouraging and under 2 sentences. Do not ask questions.`,

    // Add more Day 3 prompts here as needed...
  ],

  // Additional days following the 30-day structure
};