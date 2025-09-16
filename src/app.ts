/**
 * M2ChatAI
 * ------------------
 * License : Dual License
 *           - Apache 2.0 for open-source / personal use
 *           - Commercial license required for closed-source use
 * Author  : Md Mahbubur Rahman
 * URL     : https://m-a-h-b-u-b.github.io
 * GitHub  : https://github.com/m-a-h-b-u-b/M2ChatAI
 */

import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db";
import chatRoutes from "./routes/chat";
import { errorHandler } from "./middleware/errorHandler";

dotenv.config();

if (process.env.NODE_ENV !== "test") {
  connectDB(); // skip DB connection in Jest tests
}

const app = express();
app.use(express.json());

app.use("/api/chat", chatRoutes);

app.use(errorHandler);

export default app;
