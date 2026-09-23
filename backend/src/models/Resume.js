import mongoose, { Schema } from "mongoose";
const resumeSchema = new Schema({
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
}, {
    timestamps: true,
});
export default mongoose.model("Resume", resumeSchema);
