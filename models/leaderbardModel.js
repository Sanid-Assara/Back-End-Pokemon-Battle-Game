import mongoose from "mongoose";

const leaderbardSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    score: {
        type: Number,
        required: true
    }
},
    {
        timestamps: true
    });

const leaderboard = mongoose.model("Leaderboard", leaderbardSchema);

export default leaderboard;