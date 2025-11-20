import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';

// Initialize Gemini Client
// Note: In a real production app, you should proxy these requests through a backend to hide the API key.
// For this demo running in a secure sandbox, we use the env variable directly.
const ai = new GoogleGenAI({ apiKey });

export const refineTextWithGemini = async (rawText: string): Promise<string> => {
  if (!apiKey) {
    console.warn("Gemini API Key is missing. Returning raw text.");
    return rawText;
  }

  try {
    const modelId = 'gemini-2.5-flash';
    const prompt = `
      You are an expert copy editor and transcriber.
      I will provide a raw transcript from a speech-to-text engine.
      Your job is to:
      1. Fix any grammatical errors.
      2. Add proper punctuation.
      3. Format it into professional prose or code if it looks like code.
      4. Do NOT change the meaning or add conversational filler.
      5. Return ONLY the corrected text.

      Raw Transcript: "${rawText}"
    `;

    const response = await ai.models.generateContent({
      model: modelId,
      contents: prompt,
    });

    return response.text || rawText;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return rawText; // Fallback to raw text if AI fails
  }
};