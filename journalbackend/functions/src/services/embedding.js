import { VertexAI } from '@google-cloud/aiplatform'

const client = new VertexAI()

export async function makeEmbedding(text) {
  const [response] = await client.embedText({
    model: 'text-embedding-005',    // or your chosen model
    instances: [{ content: text }],
  })
  return response.predictions[0].embedding
}