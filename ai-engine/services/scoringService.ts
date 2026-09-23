interface EvaluationData {
  technicalCorrectness: number;
  relevance: number;
  clarity: number;
  depth: number;
  communication: number;
}

export const calculateOverallScore = (
  evaluation: EvaluationData
): number => {
  const {
    technicalCorrectness,
    relevance,
    clarity,
    depth,
    communication,
  } = evaluation;

  const score =
    technicalCorrectness * 0.35 +
    relevance * 0.20 +
    clarity * 0.15 +
    depth * 0.15 +
    communication * 0.15;

  return Math.round(score);
};

export const getPerformanceLevel = (
  score: number
): string => {
  if (score >= 85) {
    return "Excellent";
  }

  if (score >= 70) {
    return "Good";
  }

  if (score >= 50) {
    return "Average";
  }

  if (score >= 30) {
    return "Needs Improvement";
  }

  return "Beginner";
};

export const getScoreFeedback = (
  score: number
): string => {
  if (score >= 85) {
    return "Excellent interview performance. Continue practicing advanced questions.";
  }

  if (score >= 70) {
    return "Good performance. Focus on improving depth and technical precision.";
  }

  if (score >= 50) {
    return "Average performance. Strengthen fundamentals and practice explaining your answers.";
  }

  if (score >= 30) {
    return "You need more practice. Focus on fundamentals and structured answers.";
  }

  return "Start with core concepts and gradually build your technical confidence.";
};