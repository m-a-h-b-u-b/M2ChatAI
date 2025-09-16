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

import { getAIResponse } from '../services/aiService';

/**
 * Handle chat message and get AI response.
 * @param message - User message string
 * @returns AI response string
 */
export const handleChat = async (message: string): Promise<string> => {
  try {
    const aiResponse = await getAIResponse(message);
    return aiResponse;
  } catch (error) {
    console.error('Error in handleChat:', error);
    return 'Sorry, something went wrong while processing your message.';
  }
};
