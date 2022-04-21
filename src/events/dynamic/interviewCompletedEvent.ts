import {Subjects} from './subjects';


export interface InterviewCompletedEvent {
  subject: Subjects.InterviewCompleted;
  data: {
    id: string;
    referenceNumber: string;
    date: string;
    totalDuration: number;
    questionsCount: number;
    status: string;
    title: string;
    createdAt: string;
    interviewquestions: any;
    interviewresults:any;
    healthworker:any;
    feedback:any;
    interviewer:any;
    hospitalAttachment:any;
    categoriesresults:any;
  };
}