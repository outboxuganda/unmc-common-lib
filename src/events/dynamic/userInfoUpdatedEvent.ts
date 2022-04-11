import {Subjects} from './subjects';

export interface UserInfoUpdatedEvent {
    subject: Subjects.UserInfoAvailed;
    data: {
        id: string
        firstName: string
        lastName: string
        dob: Date
        role: string
        createdAt: Date
        graduationDate: Date
        nationality: string
        level: string
        email: string
        profession: string
        district: string
        training: string
        school: string
        nsin: string
        nin: string
        cadre: string
        qualification: string
        serviceType: string
        gender: string
        phoneNumber: string
    }
}