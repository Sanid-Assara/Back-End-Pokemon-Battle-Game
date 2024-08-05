import express from "express";
import scoreRouter from "./routers/scoreRouter.js";

const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());
app.use("/scores", scoreRouter);
app.listen(port, () =>
  console.log(`Server is running on port  http://localhost:${port}/scores`)
);
