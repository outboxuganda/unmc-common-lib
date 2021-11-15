import {Subjects} from './subjects';

export interface UserScheduleCreatedEvent {
    subject: Subjects.UserScheduleCreated;
    data: {
        userId: string;
        serviceType: string;
        userScheduleId: string;
        scheduleId: string;
        interviewDate: Date;
    };
}