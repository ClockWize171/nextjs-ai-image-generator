import { openai } from "@/utils/openAiConfig"

export default async function handler(req, res) {
  const imageParameters = {
    prompt: req.query.prompt,
    n: 1,
    size: req.query.resolution,
  }
  const response = await openai.createImage(imageParameters);
  res.status(200).json(response.data);
}