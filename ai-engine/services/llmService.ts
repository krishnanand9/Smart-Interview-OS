import OpenAI from "openai";

const apiKey = process.env.OPENAI_API_KEY;

if (!apiKey) {
  console.warn("WARNING: OPENAI_API_KEY is not configured.");
}

const openai = new OpenAI({
  apiKey: apiKey || "missing-api-key",
});

const model = process.env.OPENAI_MODEL || "gpt-5";

export const generateAIResponse = async (
  instructions: string,
  input: string
): Promise<string> => {
  try {
    const response = await openai.responses.create({
      model,
      instructions,
      input,
    });

    return response.output_text;
  } catch (error) {
    console.error("OpenAI API error:", error);

    throw new Error("AI response generation failed");
  }
};