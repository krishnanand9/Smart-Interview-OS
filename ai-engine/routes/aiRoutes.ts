import { Router, Request, Response } from "express";

import { generateInterviewQuestion } from "../agents/interviewerAgent";
import { evaluateAnswer } from "../agents/evaluatorAgent";
import { coachCandidate } from "../agents/coachAgent";
import { createInterviewPlan } from "../agents/plannerAgent";
import { generateHRQuestion } from "../agents/hrAgent";

const router = Router();


// ========================================
// INTERVIEW QUESTION
// ========================================

router.post(
  "/question",
  async (req: Request, res: Response) => {
    try {
      const result = await generateInterviewQuestion(req.body);

      res.status(200).json({
        success: true,
        question: result,
      });
    } catch (error) {
      console.error(error);

      res.status(500).json({
        success: false,
        message: "Failed to generate interview question",
      });
    }
  }
);


// ========================================
// EVALUATE ANSWER
// ========================================

router.post(
  "/evaluate",
  async (req: Request, res: Response) => {
    try {
      const result = await evaluateAnswer(req.body);

      res.status(200).json({
        success: true,
        evaluation: result,
      });
    } catch (error) {
      console.error(error);

      res.status(500).json({
        success: false,
        message: "Failed to evaluate answer",
      });
    }
  }
);


// ========================================
// INTERVIEW PLAN
// ========================================

router.post(
  "/plan",
  async (req: Request, res: Response) => {
    try {
      const result = await createInterviewPlan(req.body);

      res.status(200).json({
        success: true,
        plan: result,
      });
    } catch (error) {
      console.error(error);

      res.status(500).json({
        success: false,
        message: "Failed to create interview plan",
      });
    }
  }
);


// ========================================
// HR QUESTION
// ========================================

router.post(
  "/hr-question",
  async (req: Request, res: Response) => {
    try {
      const result = await generateHRQuestion(req.body);

      res.status(200).json({
        success: true,
        question: result,
      });
    } catch (error) {
      console.error(error);

      res.status(500).json({
        success: false,
        message: "Failed to generate HR question",
      });
    }
  }
);


// ========================================
// AI COACH
// ========================================

router.post(
  "/coach",
  async (req: Request, res: Response) => {
    try {
      const result = await coachCandidate(req.body);

      res.status(200).json({
        success: true,
        coaching: result,
      });
    } catch (error) {
      console.error(error);

      res.status(500).json({
        success: false,
        message: "Failed to generate coaching feedback",
      });
    }
  }
);


export default router;