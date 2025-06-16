// listModels.js
import fetch from "node-fetch";
import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

async function main() {
  const res = await fetch("https://api.anthropic.com/v1/models", {
    headers: {
      "x-api-key": process.env.CLAUDE_API_KEY,
      "anthropic-version": "2023-06-01",
    },
  });
  if (!res.ok) {
    console.error("Failed to list models:", await res.text());
    process.exit(1);
  }
  const data = await res.json();
  console.log("Full API response:", JSON.stringify(data, null, 2));
  // ← Here’s the fix: use data.data, not data.models
  const ids = data.data.map((m) => m.id);
  console.log("Available model IDs:", ids);
}

main();