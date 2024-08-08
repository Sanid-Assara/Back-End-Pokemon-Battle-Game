import express from 'express';
import { getLeaderboard, addScore } from '../Controllers/leaderboardController.js';

const router = express.Router();

router.route('/').get(getLeaderboard);

router.route('/').get(getLeaderboard).post(addScore);

export default router;