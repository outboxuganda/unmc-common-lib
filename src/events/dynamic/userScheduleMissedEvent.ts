import {Subjects} from './subjects';

export interface UserScheduleMissedEvent {
    subject: Subjects.UserScheduleMissed;
    data: {
        userId: string;
        scheduleId: string;
        missedDate: Date;
    };
}