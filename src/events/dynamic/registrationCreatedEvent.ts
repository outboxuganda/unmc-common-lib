import {Subjects} from './subjects';

export interface RegistrationCreatedEvent {
    subject: Subjects.RegistrationCreated;
    data: {
        userId: string;
        registrationId: string;
        status: 'completed' | 'pending' | 'delayed' | 'cancelled';
        category: 'permanent' | 'temporary_bachelor' | 'temporary_extensor' |
            'temporary_foreign_trained' | 'register_only' | 'private' | 'renewal';
    };
}
