import httpStatus, { UNSUPPORTED_MEDIA_TYPE } from 'http-status';
import {BaseError} from './BaseError';
import errors from "../constants/errors";

export class UnsupportedMediaType extends BaseError {
  constructor(message: string) {
    super(
      errors.unsupported_media_type,
      UNSUPPORTED_MEDIA_TYPE,
      message || httpStatus['415_MESSAGE'],
    );
  }
}
