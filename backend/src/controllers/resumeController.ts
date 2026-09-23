import { Request, Response } from "express";
import Resume from "../models/Resume";


// ========================================
// UPLOAD RESUME
// ========================================

export const uploadResume = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    // Check authentication
    if (!req.userId) {
      res.status(401).json({
        success: false,
        message: "User not authenticated",
      });
      return;
    }

    // Check uploaded file
    if (!req.file) {
      res.status(400).json({
        success: false,
        message: "Please upload a resume",
      });
      return;
    }

    const resume = await Resume.create({
      user: req.userId,
      fileName: req.file.originalname,
      filePath: req.file.path,
      skills: [],
      score: 0,
      feedback: "AI resume analysis pending",
    });

    res.status(201).json({
      success: true,
      message: "Resume uploaded successfully",
      resume,
    });
  } catch (error) {
    console.error("Resume upload error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to upload resume",
    });
  }
};


// ========================================
// GET USER RESUMES
// ========================================

export const getResumes = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    if (!req.userId) {
      res.status(401).json({
        success: false,
        message: "User not authenticated",
      });
      return;
    }

    const resumes = await Resume.find({
      user: req.userId,
    }).sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: resumes.length,
      resumes,
    });
  } catch (error) {
    console.error("Get resumes error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to get resumes",
    });
  }
};


// ========================================
// GET SINGLE RESUME
// ========================================

export const getResume = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    if (!req.userId) {
      res.status(401).json({
        success: false,
        message: "User not authenticated",
      });
      return;
    }

    const resume = await Resume.findOne({
      _id: req.params.id,
      user: req.userId,
    });

    if (!resume) {
      res.status(404).json({
        success: false,
        message: "Resume not found",
      });
      return;
    }

    res.status(200).json({
      success: true,
      resume,
    });
  } catch (error) {
    console.error("Get resume error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to get resume",
    });
  }
};