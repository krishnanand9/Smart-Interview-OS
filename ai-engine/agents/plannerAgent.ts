import { generateAIResponse } from "../services/llmService";

interface PlannerInput {
  role: string;
  experience?: string;
  skills?: string[];
}

export const createInterviewPlan = async (data: PlannerInput) => {
  const instructions = `
You are the Interview Planner Agent of Smart Interview OS.

Create an adaptive interview plan for a candidate.

The interview should contain:
- Technical questions
- Problem solving
- Behavioral questions
- Role-specific questions

Return valid JSON:

{
  "role": "",
  "difficulty": "",
  "categories": [],
  "skillsToEvaluate": [],
  "questionCount": 0,
  "strategy": ""
}
`;

  const input = `
Role:
${data.role}

Experience:
${data.experience || "Fresher"}

Skills:
${data.skills?.join(", ") || "Not provided"}
`;

  const result = await generateAIResponse(instructions, input);

  try {
    return JSON.parse(result);
  } catch {
    return {
      role: data.role,
      difficulty: "Medium",
      categories: [
        "Technical",
        "Problem Solving",
        "Behavioral"
      ],
      skillsToEvaluate: data.skills || [],
      questionCount: 10,
      strategy: result
    };
  }
};