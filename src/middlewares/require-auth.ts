import {Request, Response, NextFunction} from 'express';
import errorMessages from "../utils/errorMessages";
import Unauthorized from '../utils/errors/Unauthorized';

export const requireAuth = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    console.log('req.currentUser')
    console.log(req.currentUser)
    if (!req.currentUser) {
        throw new Unauthorized(errorMessages.not_authenticated);
    }

    next();
};
