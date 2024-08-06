import { Schema, model } from "mongoose";

const scoreSchema = new Schema({
  userName: { type: String, required: true, unique: true },
  scoreValue: { type: Number, required: true },
});

export const Score = model("Score", scoreSchema);
