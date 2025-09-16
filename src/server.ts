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
import connectDB from "./config/db"; // updated path
import chatRoutes from "./routes/chat";
import { errorHandler } from "./middleware/errorHandler";

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use("/api/chat", chatRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
