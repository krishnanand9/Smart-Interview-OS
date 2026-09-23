import mongoose, { Document, Schema } from "mongoose";

export interface IResume extends Document {
  user: mongoose.Types.ObjectId;
  fileName: string;
  filePath: string;
  skills: string[];
  score: number;
  feedback: string;
}

const resumeSchema = new Schema<IResume>(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    fileName: {
      type: String,
      required: true,
    },

    filePath: {
      type: String,
      required: true,
    },

    skills: {
      type: [String],
      default: [],
    },

    score: {
      type: Number,
      default: 0,
      min: 0,
      max: 100,
    },

    feedback: {
      type: String,
      default: "AI resume analysis pending",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<IResume>(
  "Resume",
  resumeSchema
);