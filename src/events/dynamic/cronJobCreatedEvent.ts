import {Subjects} from './subjects';

export interface CronJobCreatedEvent {
    subject: Subjects.CronJobCreated;
    data: {
        id: string,
        createdAt: Date
    }
}
