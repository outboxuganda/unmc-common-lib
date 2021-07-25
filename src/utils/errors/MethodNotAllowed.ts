import httpStatus, { METHOD_NOT_ALLOWED } from 'http-status';
import BaseError from './BaseError';
import errors from "../constants/errors";

export default class MethodNotAllowed extends BaseError {
  constructor(message: string) {
    super(errors.method_not_allowed, METHOD_NOT_ALLOWED, message || httpStatus['405_MESSAGE']);
  }
}
