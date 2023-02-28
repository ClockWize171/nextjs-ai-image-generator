import { openai } from "@/utils/openAiConfig"

export default async function handler(req, res) {
  const chatParameter = {
    model: "text-davinci-003",
    prompt: req.query.prompt,
    max_tokens: 100,
    temperature: 0.5
  }
  const response = await openai.createCompletion(chatParameter);
  res.status(200).json(response.data);
}