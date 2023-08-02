import {Subjects} from './subjects';

export interface RegistrationsApprovedEvent{
  subject: Subjects.RegistrationsApproved;
  data: {
    content: any;
  };
}