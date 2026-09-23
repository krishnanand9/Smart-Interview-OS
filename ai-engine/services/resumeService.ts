import pdfParse from "pdf-parse";
import { generateAIResponse } from "./llmService";

interface ResumeAnalysis {
  score: number;
  skills: string[];
  strengths: string[];
  weaknesses: string[];
  missingSkills: string[];
  suggestions: string[];
  summary: string;
}

export const extractResumeText = async (
  fileBuffer: Buffer
): Promise<string> => {
  try {
    const data = await pdfParse(fileBuffer);

    return data.text.trim();
  } catch (error) {
    console.error("Resume PDF parsing error:", error);

    throw new Error("Failed to extract resume text");
  }
};

export const analyzeResume = async (
  resumeText: string,
  targetRole: string
): Promise<ResumeAnalysis> => {
  const instructions = `
You are the AI Resume Analysis Agent of Smart Interview OS.

Analyze the candidate's resume for the target job role.

Evaluate:
1. Technical skills
2. Relevant experience
3. Projects
4. Education
5. Resume quality
6. Job-role alignment
7. Missing skills

Give a score from 0 to 100.

Return ONLY valid JSON in this format:

{
  "score": 0,
  "skills": [],
  "strengths": [],
  "weaknesses": [],
  "missingSkills": [],
  "suggestions": [],
  "summary": ""
}

Rules:
- Do not invent information.
- Only identify skills that actually appear in the resume.
- Keep suggestions practical.
- Score the resume based on the target role.
`;

  const input = `
Target Role:
${targetRole}

Resume:
${resumeText}

Analyze this resume.
`;

  const result = await generateAIResponse(
    instructions,
    input
  );

  try {
    return JSON.parse(result) as ResumeAnalysis;
  } catch {
    return {
      score: 0,
      skills: [],
      strengths: [],
      weaknesses: [],
      missingSkills: [],
      suggestions: [],
      summary: result,
    };
  }
};

export const processResume = async (
  fileBuffer: Buffer,
  targetRole: string
) => {
  const resumeText = await extractResumeText(fileBuffer);

  if (!resumeText) {
    throw new Error("Resume does not contain readable text");
  }

  const analysis = await analyzeResume(
    resumeText,
    targetRole
  );

  return {
    resumeText,
    analysis,
  };
};