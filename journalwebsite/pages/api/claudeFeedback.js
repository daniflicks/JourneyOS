// pages/api/claudeFeedback.js

import Anthropic, { HUMAN_PROMPT, AI_PROMPT } from "@anthropic-ai/sdk";
import { EXERCISE_PROMPTS }            from "../../lib/exercisePrompts";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).end("Method Not Allowed");
  }

  const { day, promptIndex, userText } = req.body;
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

  const fullPrompt = [
    HUMAN_PROMPT,
    "You're a warm, encouraging coach guiding a user through a 30-day journaling program.",
    `Day ${day}, Step ${promptIndex + 1} prompt: "${promptText}"`,
    `User's response: "${userText}"`,
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
    let aiText = blocks.map(b => b.text).join("\n");

    // strip any leading "# Heading" line
    aiText = aiText.replace(/^#.*\r?\n+/, "").trim();

    return res.status(200).json({ aiText });
  } catch (err) {
    console.error("Claude API error:", err);
    return res
      .status(500)
      .json({ error: err.message || "AI call failed" });
  }
}