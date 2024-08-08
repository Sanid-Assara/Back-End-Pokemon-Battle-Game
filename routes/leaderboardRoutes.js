import express from 'express';
import { getLeaderboard } from '../Controllers/leaderboardController.js';

const router = express.Router();

router.route('/').get(getLeaderboard);

export default router;