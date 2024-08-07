import express from 'express';
import asyncHandler from '../middleware/asyncHandler.js';
import leaderboard from '../models/leaderbardModel.js';

const router = express.Router();

router.get('/', asyncHandler(async (req, res, next) =>
{
    const topTenScores = await leaderboard.find({}).sort({ score: -1 }).limit(10);
    res.send(topTenScores);
}));

export default router;