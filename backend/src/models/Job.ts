import mongoose, { Document, Schema } from "mongoose";

export interface IJob extends Document {
  title: string;
  company: string;
  location: string;
  skills: string[];
  description: string;
  experience: string;
}

const jobSchema = new Schema<IJob>(
  {
    title: {
      type: String,
      required: true,
    },

    company: {
      type: String,
      required: true,
    },

    location: {
      type: String,
      default: "Remote",
    },

    skills: {
      type: [String],
      default: [],
    },

    description: {
      type: String,
      default: "",
    },

    experience: {
      type: String,
      default: "Fresher",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<IJob>("Job", jobSchema);