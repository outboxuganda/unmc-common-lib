import {Subjects} from './subjects';
import {productNames} from "../../utils/constants";

export interface UserScheduleCreatedEvent {
    subject: Subjects.UserScheduleCreated;
    data: {
        userId: string;
        serviceType: typeof productNames;
        userScheduleId: string;
        scheduleId: string;
    };
}