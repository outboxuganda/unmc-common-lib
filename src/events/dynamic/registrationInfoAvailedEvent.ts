import {Subjects} from './subjects';

export interface RegistrationInfoAvailedEvent {
    subject: Subjects.RegistrationInfoAvailed;
    data: {
        content: object;
    };
}
