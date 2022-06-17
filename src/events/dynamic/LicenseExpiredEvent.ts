import {Subjects} from './subjects';

export interface LicenseExpiredEvent{
  subject: Subjects.LicenseExpired;
  data: {
    id: string
    userId: string
    email: string
    phoneNumber: string
    qualification: any
    firstName: string
    lastName: string
    createdAt: Date
    location: any
    licenses: any
  };
}