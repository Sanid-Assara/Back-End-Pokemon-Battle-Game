import { Score } from "../models/Score.js";

export const getScores = async (req, res) => {
  try {
    const scores = await Score.find();
    res.json(scores);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createScore = async (req, res) => {
  try {
    const {
      body: { userName, scoreValue },
    } = req;
    if (!userName || !scoreValue)
      return res
        .status(400)
        .json({ error: "User Name and Score are required" });
    const score = await Score.create(req.body);

    res.json(score);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
