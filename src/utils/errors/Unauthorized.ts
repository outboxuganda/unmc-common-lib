import httpStatus, { UNAUTHORIZED } from 'http-status';
import {BaseError} from './BaseError';

export class Unauthorized extends BaseError {
  constructor(message: string) {
    super('not_authenticated', UNAUTHORIZED, message || httpStatus['401_MESSAGE']);
  }
}
