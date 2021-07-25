import {Request, Response, NextFunction} from 'express';
import {NotAuthorizedError} from '../errors/not-authorized-error';
import errorMessages from "../utils/errorMessages";

export const requireAuth = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    console.log('req.currentUser')
    console.log(req.currentUser)
    if (!req.currentUser) {
        throw new Error(errorMessages.not_authenticated);
    }

    next();
};
