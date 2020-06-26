import { StandardEntity } from "../base/sys$StandardEntity";
export class JobSsView extends StandardEntity {
  static NAME = "tsadv$JobSsView";
  startDate?: any | null;
  endDate?: any | null;
  jobGroup?: any | null;
  jobNameRu?: string | null;
  jobNameKz?: string | null;
  jobNameEn?: string | null;
  jobName?: string | null;
  maxStartDate?: string | null;
  employeeCategory?: any | null;
}
export type JobSsViewViewName = "_base" | "_local" | "_minimal";
export type JobSsViewView<V extends JobSsViewViewName> = V extends "_base"
  ? Pick<
      JobSsView,
      | "id"
      | "startDate"
      | "endDate"
      | "jobNameRu"
      | "jobNameKz"
      | "jobNameEn"
      | "maxStartDate"
    >
  : V extends "_local"
  ? Pick<
      JobSsView,
      | "id"
      | "startDate"
      | "endDate"
      | "jobNameRu"
      | "jobNameKz"
      | "jobNameEn"
      | "maxStartDate"
    >
  : never;
