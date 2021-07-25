import {MethodNotAllowed} from "../utils/errors/MethodNotAllowed";

export const methodNotAllowedHandlers = () => {
    throw new MethodNotAllowed('Method not allowed');
};
