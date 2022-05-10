import {Subjects} from './subjects';

export interface UserScheduleReminderEvent {
  subject: Subjects.UserScheduleReminder;
  data: {
    userId: string;
  };
}