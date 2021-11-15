import {Subjects} from './subjects';

export interface UserProductCreatedEvent {
    subject: Subjects.UserProductCreated;
    data: {
        userId: string;
        serviceTrackerId: string;
        productName: string;
    };
}
