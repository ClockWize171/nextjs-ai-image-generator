import { Configuration, OpenAIApi } from "openai";

const config = new Configuration({
  organization: 'org-QD7lncyjXKCkE56TraQxgdJP',
  apiKey: process.env.OPEN_AI_KEY
})

export const openai = new OpenAIApi(config);
