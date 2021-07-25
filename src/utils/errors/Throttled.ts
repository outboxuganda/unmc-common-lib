import httpStatus, { TOO_MANY_REQUESTS } from 'http-status';
import {BaseError} from './BaseError';
import errors from "../constants/errors";

export class Throttled extends BaseError {
  constructor(message: string) {
    super(errors.throttled, TOO_MANY_REQUESTS, message || httpStatus['429_MESSAGE']);
  }
}
