import Anthropic from "@anthropic-ai/sdk";

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end('Method Not Allowed');
  }

  const { message, history } = req.body;
  if (typeof message !== 'string' || !Array.isArray(history)) {
    return res.status(400).json({ error: 'Invalid request payload' });
  }

  if (!process.env.CLAUDE_API_KEY) {
    console.error('Claude API key not set');
    return res.status(500).json({ error: 'Claude API key not configured.' });
  }

  // Prepare system prompt and chat history
  const systemPrompt = 'You are Coco, a warm, encouraging AI companion guiding the user through journaling and support.';
  const chatHistory = history.map(m =>
    m.isUser
      ? { role: 'user', content: m.content }
      : { role: 'assistant', content: m.content }
  );
  const messagesPayload = [
    ...chatHistory,
    { role: 'user', content: message },
  ];

  try {
    const client = new Anthropic({
      apiKey: process.env.CLAUDE_API_KEY,
      anthropicVersion: '2023-06-01',
    });
    const response = await client.messages.create({
      model: 'claude-3-7-sonnet-20250219',
      system: systemPrompt,
      messages: messagesPayload,
      max_tokens: 1000,
      temperature: 0.7,
    });

    // response.content is an array of text blocks
    const blocks = response.content;
    if (!Array.isArray(blocks) || blocks.length === 0) {
      console.error('Raw Claude response:', JSON.stringify(response, null, 2));
      return res.status(500).json({ error: 'No text returned from Claude.' });
    }

    // Concatenate all blocks into one string
    const aiText = blocks.map(b => b.text).join('\n').trim();
    return res.status(200).json({ aiText });
  } catch (err) {
    console.error('Claude API error:', err);
    return res.status(500).json({ error: err.message || 'AI call failed' });
  }
}
