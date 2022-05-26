import {Subjects} from './subjects';

export interface InterviewStartedEvent {
    subject: Subjects.InterviewStarted;
    data: {
        interview: object;
        attemptsLeft: number;
    };
}
