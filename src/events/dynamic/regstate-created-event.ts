import {Subjects} from './subjects';

export interface RegStateCreatedEvent {
    subject: Subjects.RegStateCreated;
    data: {
        userId: string;
        percentageCompleted: number;
        stateData: {};
        stateNumber: number;
    };
}
