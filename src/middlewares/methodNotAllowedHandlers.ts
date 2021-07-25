import {MethodNotAllowed} from "../utils/errors";

export const methodNotAllowedHandlers = () => {
    throw new MethodNotAllowed('Method not allowed');
};
