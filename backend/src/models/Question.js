import mongoose, { Schema } from "mongoose";
const questionSchema = new Schema({
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
}, {
    timestamps: true,
});
export default mongoose.model("Question", questionSchema);
