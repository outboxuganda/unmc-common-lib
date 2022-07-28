import {Subjects} from './subjects';

export interface InspectionFormReviewedEvent {
    subject: Subjects.InspectionFormReviewed;
    data: {
        content: object;
    };
}
