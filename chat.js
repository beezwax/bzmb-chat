const { Configuration, OpenAIApi } = require("openai");
const fs = require('fs');

const chat = async (key, prompt, length, temperature, model = "gpt-3.5-turbo") => {
  if(!key) {
    key = fs.readFileSync("/var/www/bzbond-server/chatgpt_key")
  }
  const configuration = new Configuration({
    apiKey: key,
  });
  const openai = new OpenAIApi(configuration);
  const response = await openai.createChatCompletion({
    model,
    messages: [{role:"user", "content": prompt}],
    temperature,
    max_tokens: length
  });

  return response.data.choices[0].message.content.trim();
};

module.exports = chat;