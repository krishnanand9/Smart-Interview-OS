import mongoose, { Document, Schema } from "mongoose";

export interface IQuestion extends Document {
  question: string;
  category: string;
  difficulty: string;
  expectedSkills: string[];
}

const questionSchema = new Schema<IQuestion>(
  {
    question: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      required: true,
    },

    difficulty: {
      type: String,
      enum: ["Easy", "Medium", "Hard"],
      default: "Medium",
    },

    expectedSkills: {
      type: [String],
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<IQuestion>(
  "Question",
  questionSchema
);