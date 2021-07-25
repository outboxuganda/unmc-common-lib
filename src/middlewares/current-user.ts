import {Request, Response, NextFunction} from 'express';
import jwt from 'jsonwebtoken';
import {NotAuthorizedError} from "../errors/not-authorized-error";
import errorMessages from "../utils/errorMessages";

interface UserPayload {
    user_id: string;
    role: string;
    exp: number;
}

declare global {
    namespace Express {
        interface Request {
            currentUser?: UserPayload;
        }
    }
}

export const currentUser = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith("JWT")) {
        token = req.headers.authorization.split(" ")[1];
    }

    if (!token) {
        console.error("No token found");
        return next();
    }

    try {
        const decoded = jwt.verify(token, process.env.SECRET_KEY!) as UserPayload;
        const expiry_date = new Date(decoded.exp * 1000);
        console.log('expiry date ', expiry_date);

        if (new Date() > expiry_date){
            console.error("Token expired");
            return next();
        }
        req.currentUser = decoded;
        next();
    } catch (e) {
        console.error(e)
    }
};
