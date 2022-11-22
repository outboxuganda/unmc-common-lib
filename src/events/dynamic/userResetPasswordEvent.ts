import {Subjects} from './subjects';

export interface UserResetPasswordEvent {
    subject: Subjects.UserResetPassword;
    data: {
        "resetToken": string,
        "user": object
    };
}