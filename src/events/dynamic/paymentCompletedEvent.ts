import {Subjects} from './subjects';

export interface PaymentCompletedEvent {
    subject: Subjects.PaymentCompleted;
    data: {
        userId: string;
        invoiceId: string;
        content: object;
    };
}
