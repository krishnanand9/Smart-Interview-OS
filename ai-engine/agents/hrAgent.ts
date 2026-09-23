import { generateAIResponse } from "../services/llmService";

interface HRInput {
  role: string;
  previousAnswer?: string;
}

export const generateHRQuestion = async (data: HRInput) => {
  const instructions = `
You are the HR Interview Agent of Smart Interview OS.

Conduct a professional HR interview.

Ask one question at a time.

Focus on:
- Communication
- Motivation
- Teamwork
- Leadership
- Conflict handling
- Career goals
- Company fit

Return only the question.
`;

  const input = `
Target Role:
${data.role}

Previous Answer:
${data.previousAnswer || "No previous answer"}

Generate the next HR interview question.
`;

  return generateAIResponse(instructions, input);
};