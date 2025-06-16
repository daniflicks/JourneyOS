// lib/claudeClient.js
import Anthropic, { HUMAN_PROMPT, AI_PROMPT } from "@anthropic-ai/sdk";

function getApiKey() {
  const key = process.env.CLAUDE_API_KEY;
  if (!key) throw new Error("Missing CLAUDE_API_KEY in .env.local");
  return key;
}

export function getClaudeClient() {
  return new Anthropic({
    apiKey: getApiKey(),
    anthropicVersion: "2023-06-01", // same header you used in listModels.js
  });
}

export async function runClaudePrompt({ system, user, maxTokens = 300 }) {
  const client = getClaudeClient();
  const fullPrompt = `${HUMAN_PROMPT} ${system}\n${user}${AI_PROMPT}`;

  // Use the Messages API with a valid model ID
  const response = await client.messages.create({
    model: "claude-3-7-sonnet-20250219", // one of the IDs you listed
    max_tokens: maxTokens,
    temperature: 0.7,
    messages: [{ role: "user", content: fullPrompt }],
  });

  // Extract from response.completion (not choices)
  if (!response.completion) {
    throw new Error("No completion returned from Claude");
  }
  return response.completion.trim();
}