import {Subjects} from './subjects';

export interface DocumentReviewedEvent {
    subject: Subjects.DocumentReviewed;
    data: {
        content: object;
    };
}
