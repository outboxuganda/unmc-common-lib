import {Subjects} from './subjects';

export interface ProductCompletedEvent {
    subject: Subjects.ProductCompleted;
    data: {
        userId: string;
        serviceTrackerId: string;
        productName: string;
    };
}
