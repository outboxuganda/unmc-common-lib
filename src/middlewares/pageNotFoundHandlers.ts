import { NOT_FOUND } from 'http-status';
import { Request, Response } from 'express';
import {createErrorResponse} from "../utils/functions";
import errors from "../utils/constants/errors";

export const pageNotFoundHandler = (req: Request, res: Response) =>
  res
    .status(NOT_FOUND)
      // @ts-ignore
      .json(createErrorResponse(NOT_FOUND, errors.not_found, undefined, '404 - Page not found'));

