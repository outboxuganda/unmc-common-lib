import {Subjects} from './subjects';

export interface UserInfoAvailedEvent {
    subject: Subjects.UserInfoAvailed;
    data: {
        content: object;
    };
}
