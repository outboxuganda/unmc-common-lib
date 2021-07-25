import httpStatus, { NOT_ACCEPTABLE } from 'http-status';
import {BaseError} from './BaseError';
import errors from "../constants/errors";

export class NotAcceptable extends BaseError {
  constructor(message: string) {
    super(errors.not_acceptable, NOT_ACCEPTABLE, message || httpStatus['406_MESSAGE']);
  }
}
