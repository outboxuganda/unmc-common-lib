import {Subjects} from './subjects';

export interface DocumentReviewedEvent {
    subject: Subjects.DocumentReviewed;
    data: {
        id: string,
        name: string,
        createdAt: Date
        url: string,
        fileType: string,
        valid: boolean,
        status: string,
        verificationReason: string,
        userId: string
    }
}
