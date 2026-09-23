import { generateAIResponse } from "../services/llmService";

interface InterviewQuestionInput {
  role: string;
  category: string;
  difficulty: string;
  previousAnswer?: string;
  skills?: string[];
}

export const generateInterviewQuestion = async (
  data: InterviewQuestionInput
) => {
  const instructions = `
You are the Adaptive Interviewer Agent of Smart Interview OS.

Your job is to conduct realistic technical interviews.

Rules:
- Ask exactly ONE interview question.
- Adapt the difficulty according to the candidate's previous answer.
- Do not give the answer.
- Keep the question relevant to the candidate's role.
- Avoid repeating previous questions.
- Make the question realistic for a real company interview.

Return only the interview question.
`;

  const input = `
Role: ${data.role}

Category: ${data.category}

Difficulty: ${data.difficulty}

Candidate skills:
${data.skills?.join(", ") || "Not provided"}

Previous answer:
${data.previousAnswer || "No previous answer"}

Generate the next interview question.
`;

  return generateAIResponse(instructions, input);
};