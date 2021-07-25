import { OK } from 'http-status';
import { Request, Response, NextFunction } from 'express';

export const initResLocalsHandler = (req: Request, res: Response, next: NextFunction) => {
  res.locals.status = OK;
  res.locals.data = null;
  return next();
};

