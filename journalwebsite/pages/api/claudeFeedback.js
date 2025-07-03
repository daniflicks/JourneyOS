// pages/api/claudeFeedback.js

import Anthropic, { HUMAN_PROMPT, AI_PROMPT } from "@anthropic-ai/sdk";
import { EXERCISE_PROMPTS } from "../../lib/exercisePrompts";
import { COCO_PERSONALITY } from "../../lib/cocoPersonality";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).end("Method Not Allowed");
  }

  const { day, promptIndex, userText, userMemory = '' } = req.body;
  if (
    typeof day !== "number" ||
    typeof promptIndex !== "number" ||
    typeof userText !== "string" ||
    !userText.trim()
  ) {
    return res.status(400).json({ error: "Missing or invalid inputs" });
  }

  const promptText = EXERCISE_PROMPTS[day]?.[promptIndex];
  if (!promptText) {
    return res
      .status(400)
      .json({ error: `No prompt for day ${day}, index ${promptIndex}` });
  }

  // Build prompt with optional memory context
  const memoryContext = userMemory 
    ? `\n\nUser Memory Context: ${userMemory}`
    : '';

  const fullPrompt = [
    HUMAN_PROMPT,
    COCO_PERSONALITY,
    "",
    `Day ${day}, Step ${promptIndex + 1} exercise: ${promptText}`,
    `User's response: "${userText}"${memoryContext}`,
    "",
    "Please provide your response and update the user memory with any new insights about them.",
    "Format your response as:",
    "Response: [your main response]",
    "Memory: [updated memory profile - key insights about who this user is, their situation, patterns, fears, values, etc.]",
    AI_PROMPT,
  ].join("\n");

  try {
    const client = new Anthropic({
      apiKey: process.env.CLAUDE_API_KEY,
      anthropicVersion: "2023-06-01",
    });

    const response = await client.messages.create({
      model: "claude-3-7-sonnet-20250219",
      max_tokens: 1000,
      temperature: 0.7,
      messages: [{ role: "user", content: fullPrompt }],
    });

    // 🔑 Extract from the top-level `content` array:
    const blocks = response.content;
    if (!Array.isArray(blocks) || blocks.length === 0) {
      console.error("Raw Claude response:", JSON.stringify(response, null, 2));
      throw new Error("No text blocks in Claude's response");
    }

    // join text blocks
    let fullResponse = blocks.map(b => b.text).join("\n");

    // Parse structured response
    const responseParts = fullResponse.split(/Memory:\s*/);
    let responseText = responseParts[0].trim();
    
    // Handle cases where Claude provides both natural response and structured format
    // Look for "Response:" anywhere in the text and extract what comes after it
    const responseMatch = responseText.match(/Response:\s*([\s\S]*?)$/);
    let aiText;
    
    if (responseMatch) {
      // If "Response:" format is found, use only what comes after it
      aiText = responseMatch[1].trim();
    } else {
      // If no "Response:" format, use the entire response (removing any leading headers)
      aiText = responseText.replace(/^#.*\r?\n+/, '').trim();
    }
    
    // 🛡️ Fallback: if we still have an empty string, use fullResponse so the UI never shows blank
    if (!aiText) {
      aiText = fullResponse.trim();
    }
    
    let updatedMemory = responseParts[1]?.trim() || userMemory;

    return res.status(200).json({ aiText, updatedMemory });
  } catch (err) {
    console.error("Claude API error:", err);
    return res
      .status(500)
      .json({ error: err.message || "AI call failed" });
  }
}