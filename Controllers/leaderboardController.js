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

export { getLeaderboard };

