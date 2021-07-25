import httpStatus, { FORBIDDEN } from 'http-status';
import BaseError from './BaseError';
import errors from "../constants/errors";

export default class Forbidden extends BaseError {
  constructor(message: string) {
    super(errors.permission_denied, FORBIDDEN, message || httpStatus['403_MESSAGE']);
  }
}
