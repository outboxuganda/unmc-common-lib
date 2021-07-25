import httpStatus, { NOT_FOUND } from 'http-status';
import BaseError from './BaseError';
import errors from "../constants/errors";

export default class NotFound extends BaseError {
  constructor(message: string) {
    super(errors.not_found, NOT_FOUND, message || httpStatus['404_MESSAGE']);
  }
}
