import httpStatus, { BAD_REQUEST } from 'http-status';
import BaseError from './BaseError';
import errors from "../constants/errors";

export default class BadRequest extends BaseError {
  constructor(message: string) {
    super(errors.validation, BAD_REQUEST, message || httpStatus['400_MESSAGE']);
  }
}
