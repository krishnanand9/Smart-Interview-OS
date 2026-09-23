import mongoose, { Schema } from "mongoose";
const skillSchema = new Schema({
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
}, {
    timestamps: true,
});
export default mongoose.model("Skill", skillSchema);
