import { Router } from "express";

import {
  getJobs,
  createJob,
} from "../controllers/jobController";

import protect from "../middleware/auth";

const router = Router();

router.get("/", getJobs);

router.post("/", protect, createJob);

export default router;