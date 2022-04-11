import {Subjects} from './subjects';

export interface InterviewActiveEvent {
    subject: Subjects.InterviewActive;
    data: {
        userId: string;
    };
}
