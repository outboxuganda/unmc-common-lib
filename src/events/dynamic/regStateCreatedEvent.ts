import {Subjects} from './subjects';

export interface RegStateCreatedEvent {
    subject: Subjects.RegStateCreated;
    data: {
        userId: string;
        stateData: {};
        stateNumber: number;
        registrationId: string;
        category: 'permanent' | 'temporary_bachelor' | 'temporary_extensor' |
            'temporary_foreign_trained' | 'register_only' | 'private' | 'renewal';
    };
}
