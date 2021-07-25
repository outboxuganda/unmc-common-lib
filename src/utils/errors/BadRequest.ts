import httpStatus, { BAD_REQUEST } from 'http-status';
import errors from "../constants/errors";
import {BaseError} from "./BaseError";

export class BadRequest extends BaseError {
  constructor(message: string) {
    super(errors.validation, BAD_REQUEST, message || httpStatus['400_MESSAGE']);
  }
}
