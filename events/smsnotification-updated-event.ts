import {Subjects} from './subjects';

export interface SmsNotificationUpdatedEvent {
    subject: Subjects.SmsNotificationUpdated;
    data: {
        id: string;
        phoneNumber: string;
        message: string;
        userId: string;
    };
}
