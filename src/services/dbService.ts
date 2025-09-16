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

import { Message } from '../models/message';

/**
 * Save a chat message to the database
 * @param userId - ID of the user
 * @param role - 'user' or 'ai'
 * @param content - Message content
 * @returns Saved message document
 */
export const saveMessage = async (
  userId: string,
  role: 'user' | 'ai',
  content: string
) => {
  try {
    const message = new Message({ userId, role, content });
    return await message.save();
  } catch (error) {
    console.error('Error saving message:', error);
    throw new Error('Failed to save message to the database.');
  }
};

/**
 * Fetch recent messages for a user
 * @param userId - ID of the user
 * @param limit - Number of messages to fetch
 * @returns Array of messages
 */
export const getRecentMessages = async (userId: string, limit = 50) => {
  try {
    return await Message.find({ userId })
      .sort({ timestamp: -1 })
      .limit(limit)
      .exec();
  } catch (error) {
    console.error('Error fetching messages:', error);
    throw new Error('Failed to fetch messages from the database.');
  }
};
