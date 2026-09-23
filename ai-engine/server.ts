import dotenv from "dotenv";

dotenv.config();

import express, { Request, Response, NextFunction } from "express";
import cors from "cors";

import aiRoutes from "./routes/aiRoutes";

const app = express();

const PORT = Number(process.env.PORT) || 8000;

// -------------------------
// Middleware
// -------------------------

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:5000",
    ],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// -------------------------
// Health Check
// -------------------------

app.get("/api/health", (_req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    service: "Smart Interview OS AI Engine",
    status: "running",
    port: PORT,
  });
});

// -------------------------
// AI Routes
// -------------------------

app.use("/api/ai", aiRoutes);

// -------------------------
// Root Route
// -------------------------

app.get("/", (_req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "Smart Interview OS AI Engine",
    status: "running",
  });
});

// -------------------------
// 404 Handler
// -------------------------

app.use((_req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: "AI Engine route not found",
  });
});

// -------------------------
// Error Handler
// -------------------------

app.use(
  (
    error: Error,
    _req: Request,
    res: Response,
    _next: NextFunction
  ) => {
    console.error("AI Engine Error:", error);

    res.status(500).json({
      success: false,
      message: "AI Engine internal server error",
    });
  }
);

// -------------------------
// Start Server
// -------------------------

app.listen(PORT, () => {
  console.log("");
  console.log("=================================");
  console.log("   Smart Interview OS - AI Engine");
  console.log("=================================");
  console.log(`AI Engine running on port ${PORT}`);
  console.log(`http://localhost:${PORT}`);
  console.log("=================================");
  console.log("");
});