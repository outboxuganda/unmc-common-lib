import {Subjects} from './subjects';

export interface InspectionSubmittedEvent {
    subject: Subjects.InspectionSubmitted;
    data: {
        content: object;
    };
}
