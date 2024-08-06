import express from "express";
import { getScores, createScore } from "../controllers/scores.js";

const scoreRouter = express.Router();

scoreRouter.get("/", getScores);
scoreRouter.post("/", createScore);

export default scoreRouter;
