import { Router } from "express";
import multer from "multer";

import protect from "../middleware/auth";

import {
  uploadResume,
  getResumes,
  getResume,
} from "../controllers/resumeController";

const router = Router();


// ========================================
// MULTER CONFIGURATION
// ========================================

const upload = multer({
  dest: "uploads/",
});


// ========================================
// AUTHENTICATION
// ========================================

router.use(protect);


// ========================================
// RESUME ROUTES
// ========================================

// Upload resume
router.post(
  "/upload",
  upload.single("resume"),
  uploadResume
);

// Get all resumes
router.get(
  "/",
  getResumes
);

// Get single resume
router.get(
  "/:id",
  getResume
);


export default router;