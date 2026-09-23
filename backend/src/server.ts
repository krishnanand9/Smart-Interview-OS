import "dotenv/config";

import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import path from "path";

import connectDB from "./config/db";

import authRoutes from "./routes/authRoutes";
import interviewRoutes from "./routes/interviewRoutes";
import resumeRoutes from "./routes/resumeRoutes";
import jobRoutes from "./routes/jobRoutes";

const app = express();


// ========================================
// MIDDLEWARE
// ========================================

app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());

app.use(express.urlencoded({ extended: true }));


// ========================================
// UPLOADS
// ========================================

app.use(
  "/uploads",
  express.static(path.join(process.cwd(), "uploads"))
);


// ========================================
// HEALTH CHECK
// ========================================

app.get("/api/health", (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "Smart Interview OS backend is running",
  });
});


// ========================================
// API ROUTES
// ========================================

app.use("/api/auth", authRoutes);

app.use("/api/interviews", interviewRoutes);

app.use("/api/resumes", resumeRoutes);

app.use("/api/jobs", jobRoutes);


// ========================================
// 404 ERROR
// ========================================

app.use((req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: `Route ${req.originalUrl} not found`,
  });
});


// ========================================
// GLOBAL ERROR HANDLER
// ========================================

app.use(
  (
    error: Error,
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    console.error("Server error:", error);

    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
);


// ========================================
// START SERVER
// ========================================

const PORT = Number(process.env.PORT) || 5000;

const startServer = async (): Promise<void> => {
  try {

    // Connect MongoDB
    await connectDB();

    // Start Express
    app.listen(PORT, () => {
      console.log("=================================");
      console.log("Smart Interview OS Backend");
      console.log(`Server running on port ${PORT}`);
      console.log(`http://localhost:${PORT}`);
      console.log("=================================");
    });

  } catch (error) {

    console.error("Failed to start server:", error);

    process.exit(1);
  }
};

startServer();