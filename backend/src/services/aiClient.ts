import axios from "axios";

const AI_ENGINE_URL =
  process.env.AI_ENGINE_URL || "http://localhost:8000";

export const generateInterviewQuestion = async (
  data: {
    role: string;
    category: string;
    difficulty: string;
    previousAnswer?: string;
  }
) => {
  try {
    const response = await axios.post(
      `${AI_ENGINE_URL}/api/ai/question`,
      data
    );

    return response.data;
  } catch (error) {
    console.error(
      "AI Engine connection failed:",
      error
    );

    throw new Error(
      "AI Engine is currently unavailable"
    );
  }
};

export const evaluateAnswer = async (
  data: {
    question: string;
    answer: string;
    role: string;
  }
) => {
  try {
    const response = await axios.post(
      `${AI_ENGINE_URL}/api/ai/evaluate`,
      data
    );

    return response.data;
  } catch (error) {
    console.error(
      "AI evaluation failed:",
      error
    );

    throw new Error(
      "AI evaluation service unavailable"
    );
  }
};