import {Subjects} from './subjects';

export interface TemporaryLicenseReportGeneratedEvent {
  subject: Subjects.TemporaryLicenseReportGenerated;
  data: {
    url: string;
  };
}
