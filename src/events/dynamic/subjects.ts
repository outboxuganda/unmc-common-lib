import {UserInfoUpdatedEvent} from "./userInfoUpdatedEvent";

export enum Subjects {
    SmsNotificationCreated = 'smsnotification:created',
    RegStateCreated = 'regstate:created',
    ProductCompleted = 'product:completed',
    PaymentCompleted = 'payment:completed',
    RegistrationInfoAvailed = 'registration:availed',
    RegistrationCreated = 'registration:created',
    UserScheduleCreated = 'userschedule:created',
    UserScheduleMissed = 'userschedule:missed',
    UserProductCreated = 'userproduct:created',
    UserInfoAvailed = 'user:availed',
    UserLogInAttempt = 'user:loginattempt',
    UserRegistered = 'user:registered',
    RegistrationReviewed = 'registration:reviewed',
    InterviewBooked = 'interview:booked',
    InterviewCompleted = 'interview:completed',
    PaymentStarted = 'payment:started',
    DocumentReviewed = 'document:reviewed',
    UserInfoUpdated = 'user:updated',
    InterviewActive = 'interview:active',
}
