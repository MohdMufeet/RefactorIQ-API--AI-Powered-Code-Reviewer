const main = require("../services/google-ai.service.js");
const getResponse = async (req, res) => {
  console.log(req.body);
    const prompt = req.body.prompt;
    // const prompt = "hii"

  if (!prompt) {
    return res.status(400).json({ error: "Prompt is required" });
  }

  try {
    const response = await main(prompt);
    res.status(200).json({ response });
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
};

module.exports = { getResponse };
