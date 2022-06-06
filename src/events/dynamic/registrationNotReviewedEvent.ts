import {Subjects} from './subjects';

export interface RegistrationNotReviewedEvent{
  subject: Subjects.RegistrationNotReviewed;
  data: {
    content: object;
  };
}