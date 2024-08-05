import express from "express";
import {
  getScores,
  createScore,
  getScoreById,
  updateScore,
  deleteScore,
} from "../controllers/scores.js";

const scoreRouter = express.Router();

scoreRouter.get("/", getScores);
scoreRouter.post("/", createScore);

export default scoreRouter;
