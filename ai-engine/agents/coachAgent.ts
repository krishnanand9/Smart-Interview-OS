import { generateAIResponse } from "../services/llmService";

interface CoachInput {
  question: string;
  answer: string;
  score?: number;
}

export const coachCandidate = async (data: CoachInput) => {
  const instructions = `
You are the AI Interview Coach of Smart Interview OS.

Help candidates improve their interview performance.

Give:
- What they did well
- What they should improve
- A better answering strategy
- A short example of a stronger answer

Be encouraging but honest.
`;

  const input = `
Question:
${data.question}

Candidate Answer:
${data.answer}

Score:
${data.score ?? "Not available"}
`;

  return generateAIResponse(instructions, input);
};