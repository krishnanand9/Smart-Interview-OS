import { generateAIResponse } from "../services/llmService";

interface JobMatchInput {
  role: string;
  candidateSkills: string[];
  jobTitle: string;
  jobDescription: string;
  requiredSkills?: string[];
}

export const matchCandidateToJob = async (
  data: JobMatchInput
) => {
  const instructions = `
You are the Job Matching Agent of Smart Interview OS.

Your job is to analyze how well a candidate matches a job.

Evaluate:
1. Skill match
2. Role relevance
3. Required skills
4. Missing skills
5. Overall suitability

Give a match score from 0 to 100.

Return ONLY valid JSON in this exact format:

{
  "matchScore": 0,
  "matchedSkills": [],
  "missingSkills": [],
  "strengths": [],
  "recommendations": [],
  "summary": ""
}

Rules:
- matchScore must be between 0 and 100.
- Do not invent candidate skills.
- Only consider skills provided by the candidate.
- Keep recommendations practical.
`;

  const input = `
Candidate Target Role:
${data.role}

Candidate Skills:
${data.candidateSkills.join(", ")}

Job Title:
${data.jobTitle}

Job Description:
${data.jobDescription}

Required Skills:
${data.requiredSkills?.join(", ") || "Not provided"}

Analyze the candidate's suitability for this job.
`;

  const result = await generateAIResponse(
    instructions,
    input
  );

  try {
    return JSON.parse(result);
  } catch {
    return {
      matchScore: 0,
      matchedSkills: [],
      missingSkills: [],
      strengths: [],
      recommendations: [],
      summary: result,
    };
  }
};