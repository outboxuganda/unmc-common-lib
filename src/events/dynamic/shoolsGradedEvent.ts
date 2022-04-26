import {Subjects} from './subjects';

export interface ShoolsGradedEvent{
  subject: Subjects.SchoolsGraded;
  data: {
    id :string
    name : string
    district : string
    passRate : number
    createdAt : Date
  };
}