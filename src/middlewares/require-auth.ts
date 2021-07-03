import {Request, Response, NextFunction} from 'express';
import {NotAuthorizedError} from '../errors/not-authorized-error';

export const requireAuth = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    // todo add jwt auth
    // if (!req.currentUser) {
    //     throw new NotAuthorizedError();
    // }

    next();
};
