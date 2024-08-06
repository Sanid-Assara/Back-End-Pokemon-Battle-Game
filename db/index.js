import mongoose from "mongoose";

try {
  await mongoose.connect(process.env.MONGO_URI);
  console.log("The db is connected successfully.");
} catch (error) {
  console.error(error);
}
