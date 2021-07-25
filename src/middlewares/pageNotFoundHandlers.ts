import {NOT_FOUND} from 'http-status';
import {Request, Response} from 'express';
import {createErrorResponse} from "../utils/functions";
import errors from "../utils/constants/errors";

export const pageNotFoundHandlers = (req: Request, res: Response) =>
    res
        .status(NOT_FOUND)
        .json(createErrorResponse(NOT_FOUND, errors.not_found, undefined, '404 - Page not found'));

