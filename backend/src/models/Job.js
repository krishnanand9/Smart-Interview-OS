import mongoose, { Schema } from "mongoose";
const jobSchema = new Schema({
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
}, {
    timestamps: true,
});
export default mongoose.model("Job", jobSchema);
