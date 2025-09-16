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

import { Router, Request, Response } from "express";

const router = Router();

router.post("/", async (req: Request, res: Response) => {
  const { message } = req.body;
  if (!message) return res.status(400).json({ error: "Message is required" });

  // Dummy AI response
  const response = `AI says: ${message.split("").reverse().join("")}`;
  res.json({ response });
});

export default router;
