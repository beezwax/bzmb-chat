const chat = require("./chat.js");

const chatSchema = {
  body: {
    type: "object",
    required: ["prompt"],
    properties: {
      key: { type: "string", minLength: 1 },
      prompt: { type: "string", minLength: 1 },
      length: { type: "number" },
      temperature: { type: "number" },
      model: { type: "string" }
    },
  },
};

async function bzmbChat(fastify, options) {
  fastify.post("/bzmb-chat", { schema: chatSchema }, async (req, res) => {
    const { key, prompt, length, temperature, model } = req.body;
    try {
      const story = await chat(key, prompt, length, temperature, model);
      res
        .code(200)
        .send(story);
    } catch (error) {
      res
        .send(error);
    }
  });
}

module.exports = { plugin: bzmbChat };