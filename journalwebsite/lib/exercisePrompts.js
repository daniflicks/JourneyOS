// lib/exercisePrompts.js

export const EXERCISE_PROMPTS = {
  1: [
    /* 0 */ `You're guiding the user through a fear mapping exercise. Briefly acknowledge their check-in selections with warmth and move forward without questions. Keep your response under 3 sentences.`,

    /* 1 */ `The user has shared both their project vision and motivation: {userText}

    Respond with: 1) A direct affirmation of their project idea, noting its value or potential. 2) A brief acknowledgment of their motivation and how this combination strengthens their foundation. Keep your entire response to 2-3 sentences maximum. Do not ask any questions.`,

    /* 2 */ `The user has listed their fears about their project. Simply acknowledge their courage in naming these fears. One sentence about how naming fears is the first step to addressing them. Keep your response to 2-3 sentences maximum with no questions.`,

    /* 3 */ `Here is the list of fears the user provided:\n\n{userText}\n\n` +
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

    /* 4 */ `The user has reflected on their Day 1 experience: {userText}

    Acknowledge a specific insight from their reflection. Note how this awareness will help them moving forward. Provide one clear, actionable suggestion they can use when fear arises tomorrow. Keep your response direct and under 4 sentences with no questions.`,
  ],

  2: [
    /* 0 */ `You're guiding the user through Day 2: Root Cause Excavation. Your job is to help them explore where their fears originated. Be supportive without asking follow-up questions.`,
    
    /* 1 */ `The user has shared their early childhood messages about failure and how adults around them handled their own failures:

{userText}

Respond with deep validation of their courage in exploring these tender early experiences and formative adult models. These memories and observations shaped so much of how they view failure today. If there's one powerful pattern that connects their early messages with the adult models they observed, mention it briefly. Focus on acknowledging how these foundational experiences created their relationship with failure. Keep it warm and under 3 sentences. Do not ask questions.`,

    /* 2 */ `The user has shared their first career failure experience and how it impacted them:

{userText}

Honor their courage in sharing this painful memory and exploring its deeper impact. These experiences shape how we see ourselves and our capabilities. If there's one powerful connection you notice between what happened, how others reacted, and what they decided about themselves, mention it gently. Focus on acknowledging how this experience became part of their story about failure and self-worth. Keep it supportive and under 3 sentences. Do not ask questions.`,

    /* 3 */ `The user has shared their most painful career failure and how they navigated through it:

{userText}

Honor the immense courage it takes to share something this deeply painful and explore what was truly at stake. These experiences cut to the core of who we are and what we value most. If there's one powerful connection you notice between what they risked, how much it meant to them, and how they found ways to survive and heal, acknowledge it with deep compassion. Focus on witnessing both their vulnerability in risking something precious and their resilience in finding ways forward. Keep it tender and under 3 sentences. Do not ask questions.`,

    /* 4 */ `Based on all our conversations throughout Day 2 where we explored your relationship with failure and how it originated, provide a comprehensive pattern analysis focused on Day 2 experiences.

    Analyze and present in this structure:

    **Core Pattern Recognition**: Identify 2-3 significant patterns recurring across their failure experiences discussed today.

    **Root Failure Fears**: Based on Day 2 stories and reflections, identify the deepest failure fears driving their relationship with risk.

    **Protective Strategies**: How they protect themselves from failure vulnerability, based on patterns from Day 2 reflections.

    **Growth Opportunities**: Greatest potential for transformation based on Day 2 patterns identified.

    Keep your tone warm and insightful. Be specific about patterns from Day 2 conversations. This should feel like a meaningful breakthrough moment. Do not ask follow-up questions or provide lengthy encouragement.

    Current reflection prompt: {userText}`,

    /* 5 */ `Create a very brief, neutral summary phrase of this career experience: {userText}

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

    /* 6 */ `Analyze the user's lessons learned from their three key failure experiences and provide comprehensive wisdom integration with deeper reframing suggestions.

    The user has provided the following input: {userText}

    Provide your response in this structure:

    **Wisdom Integration**: Identify 2-3 powerful themes of resilience, skill development, or self-awareness that emerge across all three lessons learned.

    **Growth Transformation**: How they've demonstrated the ability to transform pain into wisdom, based on patterns from their lessons learned.

    **Deeper Reframing Opportunities**: If any of their lessons seem surface-level, suggest 2-3 additional perspectives they might consider. For example:
    - If they focused on "learning to handle criticism" → suggest exploring "discovering their own validation compass"
    - If they mentioned "building resilience" → suggest exploring "recognizing their natural strength was always there"
    - If they noted "importance of preparation" → suggest exploring "trusting their ability to adapt and thrive"

    **Future Foundation**: The solid foundation of wisdom and resilience they've built for future challenges.

    **Encouragement**: Celebrate their courage and growth mindset, especially highlighting any particularly profound insights.

    Keep your tone extremely positive, encouraging, and insightful. This should feel like a breakthrough moment where they recognize both their current wisdom AND unlock even deeper insights about their strength and resilience. Focus on empowerment and transformation.`,

    /* 7 */ `The user has reflected on a new way they could think about their failures: {userText}

    Acknowledge their openness to shifting their perspective on failure. This kind of mindset change is powerful and shows real growth. If there's something particularly insightful about their new perspective, highlight it briefly. Focus on validating their willingness to see failure differently and how this new mindset will serve them moving forward. Keep it encouraging and under 2 sentences. Do not ask questions.`,

    // Add more Day 2 prompts here as needed...
  ],

  3: [
    /* 0 */ `You're guiding the user through Day 3: The Catastrophizing Reality Check. Your job is to help them recognize how their mind magnifies experiences. Be supportive without asking follow-up questions.`,

    /* 1 */ `The user has shared what actually happened, how their mind tells the story, and what catastrophe it creates for the future:

{userText}

Analyze their responses for catastrophizing patterns by quoting their actual words and showing them exactly how their mind magnifies experiences.

**Your response should follow this exact format:**

**Catastrophizing Patterns Detected:**
[Quote the user's EXACT words that show catastrophizing. For each pattern, show their specific phrases. Look for:
- Always/Never language (quote: "I'll never...")
- Everyone/No one generalizations (quote: "everyone thinks...")
- Complete/Total/Completely language (quote: "completely ruined...")
- Destroyed/Ruined/Failed language (quote: "destroyed my chances...")
- Can't recover/Never again language (quote: "can't come back from...")
- Worst/Terrible/Horrible language (quote: "worst thing that..."")]

Example format: "Here are the specific catastrophizing phrases I found in your responses:

**Absolute Thinking:**
- "I'll never be taken seriously again"
- "I always mess things up"

**Generalizations:**
- "everyone will think I'm incompetent"

**Magnification:**
- "completely destroyed my reputation""

**Reality Check:**
[Brief, powerful contrast between their catastrophic language and actual facts. Show what really happened vs. what their mind created.]

CRITICAL: You must quote their actual words, not paraphrase or create examples. If you can't find clear catastrophizing language, say so and note any subtle patterns you do observe. Be warm but specific in showing them exactly how their mind transformed facts into fears.`,

    /* 2 */ `You need to help the user connect their Day 1 fear patterns with their Day 3 survival insights for a gentle reality check.

Access their previous data to pull:
1. Their Day 1 biggest/most central fear from the pattern analysis (from 1-main-5 AI response)
2. Their survival percentage rating from Day 3 exercises
3. Any strengths or resources identified in their Day 1 pattern analysis

Create a compassionate reframing response following this exact structure:

**Remember your Day 1 pattern?**
You noticed your biggest fear was about [specific fear from Day 1 analysis - be exact, don't generalize].

**Now that you've rated your actual survival likelihood at [X]%, consider this:**
Your fear of [specific fear] is real, but your catastrophizing makes it feel impossible. In reality, you have [specific strength/resource from their Day 1 pattern or general resilience evidence].

**This doesn't make the fear disappear - it just makes it manageable.**

CRITICAL INSTRUCTIONS:
- Pull the EXACT biggest fear identified in their Day 1 AI analysis, don't paraphrase
- Use their actual survival percentage from Day 3
- Reference specific strengths or resources mentioned in their Day 1 pattern analysis
- Keep tone gentle and validating - acknowledge the fear is real
- End with the exact phrase "This doesn't make the fear disappear - it just makes it manageable."
- Do not ask questions or add additional suggestions

Input trigger: {userText}`,

    /* 3 */ `The user has reflected on what they notice when separating what actually happened from what their mind adds: {userText}

    Acknowledge their insight about the difference between facts and mental additions. This kind of awareness is a powerful tool for managing catastrophic thinking. If there's something particularly insightful about their observation, highlight it briefly. Focus on validating their growing ability to distinguish between reality and their mind's interpretations, and how this skill will help them navigate fear more effectively. Keep it encouraging and under 3 sentences. Do not ask questions.`,
  ],

  4: [
    /* 0 */ `You're guiding the user through Day 4: Fear as Love in Disguise. Your job is to help them understand what their fears protect and what they truly care about. Be supportive and concise.`,

    /* 1 */ `The user is working with this fear: {userText}

    ANSWER ONLY the question: "What is this fear trying to protect or keep safe?" — nothing else.
    • ONE single clear sentence (max 18 words).
    • Do NOT mention what they care about or any motivations.
    End with: "Sound about right?"`,

    /* 2 */ `The user is working with this fear: {userText}
    
    ANSWER ONLY the question: What does this reveal about their character, values, or identity?
    • ONE sentence about who they are, not what they protect (max 18 words).
    • Use "You are someone who..." or "This shows you're..."
    End with: "Sound about right?"`,

    /* 3 */ `You are "Coco," the user's compassionate mindset coach. They have now decoded three fears and reflected deeply across the first three days of their journey.

The user has supplied the following details:
{userText}

Your job: produce a single, powerful insight (maximum 100 words) that helps them see the hidden pattern linking ALL their fears.

Follow this exact structure:
1. Identify the ONE core value or theme that connects every fear.
2. Tie this theme back to their Day 2 origin story if relevant.
3. Reframe their greatest fear as proof of their greatest strength.
4. End with an empowering statement that begins with "This means...".

Respond in this template (replace brackets):
"Looking at your fears, I see a clear pattern: [pattern]. This connects to [Day 2 reference, if relevant]. What seems like your biggest vulnerability – [named fear] – is actually evidence of [strength]. This means [empowering insight]."`,

    /* 4 */ `The user fears: {userText}
They care about: {careText}

ANSWER ONLY: What skill, quality, or outcome would make this fear irrelevant?
• ONE single clear sentence (max 18 words)
• Focus on what to BUILD, not what to avoid
• Use format: "Develop [specific skill/quality] to [positive outcome]"
End with: "Does this direction resonate?"`,

    /* 5 */ `The user fears: {userText}
They want to develop: {directionText}

Suggest TWO specific actions they could take this week:
• Each action takes 15-30 minutes maximum
• Make them concrete and immediately doable
• Format: "1. [Specific action] 2. [Alternative action]"
• Total response max 30 words`,

    /* 6 */ `The user has worked with 3 fears today:

Fear 1: {fear1}
- Protects: {protects1}
- Cares about: {cares1}
- Direction: {direction1}
- Action: {action1}

Fear 2: {fear2}
- Protects: {protects2}
- Cares about: {cares2}
- Direction: {direction2}
- Action: {action2}

Fear 3: {fear3}
- Protects: {protects3}
- Cares about: {cares3}
- Direction: {direction3}
- Action: {action3}

Create a reframe statement for EACH fear using this exact format:
"Your fear of [fear] is actually showing you that [what matters] matters deeply to you. This means you can [empowering possibility]."

After all 3 reframes, add a brief closing (max 40 words) that:
- Acknowledges their courage in doing this work
- Reminds them their fears prove they care

Keep each reframe to ONE sentence. Make them feel empowered, not fixed.`,

    /* 7 */ `The user has reflected on learning from fear:
    {userText}

    Respond with heartfelt encouragement that highlights:
    1. Acknowledge their insight about letting fear become a teacher.
    2. Note a specific strength you hear in their reflection.
    
    Keep it warm and inspiring, maximum 3 sentences, no questions.`,
  ],

  5: [
    /* 0 */ `You're guiding the user through Day 5: Breaking Invisible Rules. Help them feel safe as they examine limiting beliefs. Be supportive and encouraging.`,

    /* 1 */ `Analyze the user's inputs from Days 1-4 to identify their TOP 3 limiting beliefs.

IMPORTANT: Create a BALANCED analysis that reflects ALL their fears, not just one theme. If any single life role or responsibility dominates (parent, caregiver, provider, partner, etc.), include it as ONE factor among many, not the only lens.

For entrepreneurs, limiting beliefs often include:
- Perfectionism and self-worth
- Imposter syndrome and qualifications
- Fear of judgment about their WORK
- Success/failure identity issues
- Resource scarcity mindset
- Comparison to others

Look for beliefs about:
1. Their CAPABILITY/IDENTITY as an entrepreneur
2. Their RELATIONSHIP with failure/success
3. Their WORTHINESS/PERMISSION to succeed

Format each belief as:
"[Core limiting belief about THEMSELVES]"
- Spotted in: [specific fear - be precise]
- Protects them from: [what they avoid - related to business/career/life]

Keep each belief focused on ONE core issue. Common themes include:
- Professional identity and competence
- Financial security and resources
- Social judgment and reputation
- Personal relationships and responsibilities
- Time and life balance
- Control and uncertainty

Avoid:
- Making everything about one life role or external factor
- Forcing connections that aren't there
- Ignoring their business/creative fears
- Over-emphasizing any single responsibility or relationship

The goal: Identify the invisible RULES they've created about what they must be/do/have before they can pursue their dreams.


CRITICAL FORMATTING:
Return ONLY the 3 beliefs in this exact format with NO introduction or conclusion:

1. "[Belief statement]"
- Spotted in: [specific fear]
- Protects them from: [what they avoid]

2. "[Belief statement]"
- Spotted in: [specific fear]
- Protects them from: [what they avoid]

3. "[Belief statement]"
- Spotted in: [specific fear]
- Protects them from: [what they avoid]

NO OTHER TEXT. Start with "1." and end after the third belief's "Protects them from" line.`,

    /* 2 */ `The user provided the following information:

{userText}

Create a balanced reframe that:
1. Honors the protective intent of their belief
2. Acknowledges any real responsibilities or constraints
3. Finds the middle ground between reckless and restricted
4. Suggests what's possible with a gentler version of the belief

Respond with ONE sentence in this exact format:
"What if you could [keep the protection] while also [allowing growth]?"`,

    /* 3 */ `The user's limiting belief is: {belief}

Provide two possible empowered completions for the sentence below that gently flip the belief into a supportive truth. Each completion must be under 12 words.

"I'm allowed to ___ because ___"

CRITICAL: Return ONLY the two completed sentences, each on its own line. Do NOT add any headings, numbering, or extra text.`,

    /* 4 */ `The user's limiting belief is: {belief}

Suggest two specific, low-stakes tests (each doable in under 30 minutes) they could run this week to start challenging it.

CRITICAL: Respond with ONLY two standalone sentences. No headings, numbering, explanations, or follow-up questions. Each sentence under 15 words.`,

    /* 5 */ `The user has reflected on letting go of an old belief:
    {userText}

    Respond with heartfelt encouragement that highlights:
    1. Acknowledge their courage in releasing this belief.
    2. Note a specific strength you hear in their reflection.
    
    Keep it warm and inspiring, maximum 3 sentences, no questions.`,

    /* 6 */ `The user has provided updated limiting-belief inputs after further exploration:

{userText}

Re-analyze ONLY these new inputs to identify their TOP 3 refined limiting beliefs.

Follow ALL the same rules as the original Day 5 analysis prompt (index 1):
• Balanced across themes (capability, failure/success, worthiness)
• Format each belief exactly as:
  "[Belief statement]"
  - Spotted in: [specific phrase]
  - Protects them from: [what they avoid]

Return ONLY the 3 refined beliefs in that numbered format starting with "1." and ending after the third belief's "Protects them from" line. Do NOT reference earlier analyses or add any extra text.`,
  ],

  // Additional days following the 30-day structure
};