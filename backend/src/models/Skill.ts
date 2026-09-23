import mongoose, { Document, Schema } from "mongoose";

export interface ISkill extends Document {
  user: mongoose.Types.ObjectId;
  skill: string;
  score: number;
  level: string;
}

const skillSchema = new Schema<ISkill>(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    skill: {
      type: String,
      required: true,
    },

    score: {
      type: Number,
      default: 0,
      min: 0,
      max: 100,
    },

    level: {
      type: String,
      default: "Beginner",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<ISkill>("Skill", skillSchema);