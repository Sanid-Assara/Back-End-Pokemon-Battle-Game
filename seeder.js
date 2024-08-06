import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";
import leaderBoardData from "./data/leaderBoardData.js";
import leaderboard from "./models/leaderbardModel.js";
import connectDB from "./config/db.js";

dotenv.config();

connectDB();

const importData = async () =>
{
    try
    {
        await leaderboard.deleteMany();

        const createdLeaderboard = await leaderboard.insertMany(leaderBoardData);

        console.log("Data Imported!".green);

        process.exit();
    }
    catch (error)
    {
        console.error(`Error: ${error.message}`.red);
        process.exit(1);
    }
}

const destroyData = async () =>
{
    try
    {
        await leaderboard.deleteMany();

        console.log("Data Destroyed!".red);

        process.exit();
    }
    catch (error)
    {
        console.error(`Error: ${error.message}`.red);
        process.exit(1);
    }
}

if (process.argv[2] === "-d")
{
    destroyData();
}
else 
{
    importData();
}