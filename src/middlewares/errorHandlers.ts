import { INTERNAL_SERVER_ERROR } from 'http-status';
import { ValidationError as ExpressValidationError } from 'express-validation';
import { Request, Response, NextFunction } from 'express';
import BaseError from "../utils/errors/BaseError";
import {createErrorResponse} from "../utils/functions";
import errors from "../utils/constants/errors";

type HandledError = BaseError | ExpressValidationError | Error;

export const errorHandlers = (
  err: HandledError,
  req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: NextFunction,
) => {
  if (err instanceof BaseError) {
    return res
      .status(err.statusCode)
        .json(createErrorResponse(err.statusCode, err.type, undefined, err.message));
  }

  if (err instanceof ExpressValidationError) {
    // @ts-ignore
    const param = Object.keys(err.details[0])[0];
    // @ts-ignore
    const msg = err.details[0][param];
    return res
      .status(err.statusCode)
      .json(createErrorResponse(err.statusCode, errors.validation, param, msg));
  }

  return res
    .status(INTERNAL_SERVER_ERROR)
      .json(createErrorResponse(INTERNAL_SERVER_ERROR, errors.server, undefined, err.message));
};

