import {Subjects} from './subjects';

export interface RegStateCreatedEvent {
    subject: Subjects.RegStateCreated;
    data: {
        userId: string;
        stateData: {};
        stateNumber: number;
        registrationId: string;
        category: string;
    };
}
