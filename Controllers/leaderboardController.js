import asyncHandler from '../middleware/asyncHandler.js';
import leaderboard from '../models/leaderbardModel.js';

// @desc    Get all leaderboard
// @route   GET /api/leaderboard
// @access  Public
const getLeaderboard = asyncHandler(async (req, res) =>
{
    const topTenScores = await leaderboard.find({}).sort({ score: -1 }).limit(10);
    res.send(topTenScores);
});

// @desc    Add new score to leaderboard
// @route   POST /api/leaderboard
// @access  Public
const addScore = asyncHandler(async (req, res) =>
{
    const { username, score } = req.body;

    if (!username || !score)
    {
        res.status(400);
        throw new Error('Username and score are required');
    }

    const newEntry = await leaderboard.create({ username, score });

    res.status(201).json(newEntry);
});

export { getLeaderboard, addScore };

