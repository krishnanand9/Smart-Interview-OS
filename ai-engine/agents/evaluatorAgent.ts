import { generateAIResponse } from "../services/llmService";

interface EvaluationInput {
  question: string;
  answer: string;
  role: string;
}

export const evaluateAnswer = async (data: EvaluationInput) => {
  const instructions = `
You are the Technical Evaluation Agent of Smart Interview OS.

Evaluate the candidate's interview answer.

Evaluate:
1. Technical correctness
2. Relevance
3. Clarity
4. Depth
5. Communication

Give a score from 0 to 100.

Return ONLY valid JSON in this format:

{
  "score": 0,
  "technicalCorrectness": 0,
  "relevance": 0,
  "clarity": 0,
  "depth": 0,
  "communication": 0,
  "strengths": [],
  "weaknesses": [],
  "feedback": ""
}
`;

  const input = `
Role:
${data.role}

Question:
${data.question}

Candidate Answer:
${data.answer}
`;

  const result = await generateAIResponse(instructions, input);

  try {
    return JSON.parse(result);
  } catch {
    return {
      score: 0,
      technicalCorrectness: 0,
      relevance: 0,
      clarity: 0,
      depth: 0,
      communication: 0,
      strengths: [],
      weaknesses: [],
      feedback: result,
    };
  }
};