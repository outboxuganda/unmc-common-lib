import httpStatus, { UNAUTHORIZED } from 'http-status';
import BaseError from './BaseError';
import errors from "../constants/errors";

export default class Unauthorized extends BaseError {
  constructor(message: string) {
    super(errors.not_authenticated, UNAUTHORIZED, message || httpStatus['401_MESSAGE']);
  }
}
