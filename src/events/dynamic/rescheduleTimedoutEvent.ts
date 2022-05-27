import {Subjects} from './subjects';

export interface RescheduleTimedoutEvent {
    subject: Subjects.InterviewRescheduleTimeout;
    data: {
        interview: object;
    };
}
