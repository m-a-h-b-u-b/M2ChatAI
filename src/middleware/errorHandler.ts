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

import { Request, Response, NextFunction } from "express";

export const errorHandler = (err: Error, req: Request, res: Response, _next: NextFunction) => {
  void _next; // intentionally unused to satisfy ESLint
  res.status(500).json({ message: err.message });
};
