import {Subjects} from './subjects';

export interface RegistrationReviewedEvent {
    subject: Subjects.RegistrationReviewed;
    data: {
        content: object;
    };
}
