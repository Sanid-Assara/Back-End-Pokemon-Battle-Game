import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import leaderboardRoutes from './routes/leaderboardRoutes.js';
dotenv.config();

const port = process.env.PORT || 8000;

connectDB();

const app = express();

app.use(cors());

app.use('/api/leaderboard', leaderboardRoutes);

app.listen(port, () =>
{
    console.log(`Server running in port ${port}`);
});