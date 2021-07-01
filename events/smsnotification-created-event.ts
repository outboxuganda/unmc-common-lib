import {Subjects} from './subjects';

export interface SmsNotificationCreatedEvent {
    subject: Subjects.SmsNotificationCreated;
    data: {
        id: string;
        phoneNumber: string;
        message: string;
        userId: string;
    };
}
