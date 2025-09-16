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

import { Router, Request, Response } from 'express';
import { handleChat } from '../controllers/chatController';

const router = Router();

/**
 * POST /api/chat/message
 * Endpoint to send a chat message and get AI response.
 */
router.post('/message', async (req: Request, res: Response) => {
  try {
    const { message } = req.body;
    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    const response = await handleChat(message);
    return res.json({ response });
  } catch (error) {
    console.error('Chat route error:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
});

export default router;
