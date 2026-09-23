import { Router, RequestHandler } from "express";
import protect from "../middleware/auth";

// Load controller dynamically
const interviewController = require("../controllers/interviewController") as {
  createInterview: RequestHandler;
  getInterviews: RequestHandler;
  getInterview: RequestHandler;
  submitAnswer: RequestHandler;
};

const router = Router();


// ========================================
// PROTECT ALL INTERVIEW ROUTES
// ========================================

router.use(protect);


// ========================================
// INTERVIEW ROUTES
// ========================================

// Create interview
router.post(
  "/",
  interviewController.createInterview
);

// Get all interviews
router.get(
  "/",
  interviewController.getInterviews
);

// Get single interview
router.get(
  "/:id",
  interviewController.getInterview
);

// Submit answer
router.post(
  "/:id/answer",
  interviewController.submitAnswer
);


export default router;