import {MethodNotAllowed} from "../utils/errors";

export const methodNotAllowedHandler = () => {
  throw new MethodNotAllowed('Method not allowed');
};
