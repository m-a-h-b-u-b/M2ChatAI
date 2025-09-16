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

/**
 * Simple logger utility
 */

export const log = (message: any, context?: string) => {
  if (context) {
    console.log(`[${new Date().toISOString()}] [${context}]`, message);
  } else {
    console.log(`[${new Date().toISOString()}]`, message);
  }
};

export const error = (message: any, context?: string) => {
  if (context) {
    console.error(`[${new Date().toISOString()}] [${context}]`, message);
  } else {
    console.error(`[${new Date().toISOString()}]`, message);
  }
};
