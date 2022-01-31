import {Subjects} from './subjects';

export interface UserRegisteredEvent {
    subject: Subjects.UserRegistered;
    data: {
        id: string,
        firstName: string,
        lastName: string,
        dob: string,
        phoneNumber: string,
        role: string,
        nationality: string,
        createdAt: Date,
        email: string,
        gender: string
        otpCode: string
    };
}
