// import { GoogleGenAI } from "@google/genai";
const { GoogleGenAI } = require("@google/genai");
const { GOOGLE_GEMINI_API } = process.env;
// const GOOGLE_API_KEY = process.env.GOOGLE_GEMINI_API;
const GOOGLE_API_KEY = GOOGLE_GEMINI_API;
const ai = new GoogleGenAI({ apiKey: GOOGLE_API_KEY });

async function main(prompt) {
  const codeReviewerInstruction = `
You are a strict, automated Senior Software Engineer and Code Auditor. 
Your ONLY job is to review programming code.

CRITICAL RULES:
1. If the user input is a programming code snippet (in any language like JavaScript, Python, C++, HTML, SQL, etc.), you must analyze it and provide a structured review covering:
   - Efficiency & Performance
   - Security Vulnerabilities & Bugs
   - Clean Code & Refactoring suggestions.
2. If the user input is NOT code (for example: greetings like "Hi", general questions like "How are you?", random text, or essays), you must reject it instantly.
3. For non-code inputs, your response must be exactly and ONLY: "Sorry, I only review code." Do not add any other words, greetings, or explanations.
`;
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      systemInstruction: codeReviewerInstruction,
      contents: `${prompt}`,
      temperature: 0.3,
      maxOutputTokens: 100,
      topP: 1,
      topK: 1,
    });
    console.log(response.text);
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
}

module.exports = main;
