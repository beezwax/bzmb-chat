const chat = require("./chat.js");

const prompt = "write a story about a conversation";
const length = 2000;
const temperature = 1;
const model = "gpt-3.5-turbo";

(async() => {
  const story = await chat(undefined, prompt, length, temperature, model);
  console.log(story);
}
)()