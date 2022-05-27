import {Subjects} from './subjects';

export interface RescheduleTimedoutEvent {
    subject: Subjects.InterviewRescheduleTimedout;
    data: {
        interview: object;
    };
}
