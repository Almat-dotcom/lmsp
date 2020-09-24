import { AbstractParentEntity } from "./AbstractParentEntity";
import { JobRequest } from "./tsadv$JobRequest";
export class JobRequestHistory extends AbstractParentEntity {
  static NAME = "tsadv$JobRequestHistory";
  jobRequest?: JobRequest | null;
  jobRequestStatus?: any | null;
}
export type JobRequestHistoryViewName =
  | "_base"
  | "_local"
  | "_minimal"
  | "jobRequestHistory.view";
export type JobRequestHistoryView<
  V extends JobRequestHistoryViewName
> = V extends "_base"
  ? Pick<JobRequestHistory, "id" | "jobRequestStatus" | "legacyID">
  : V extends "_local"
  ? Pick<JobRequestHistory, "id" | "jobRequestStatus" | "legacyID">
  : V extends "_minimal"
  ? Pick<JobRequestHistory, "id">
  : V extends "jobRequestHistory.view"
  ? Pick<
      JobRequestHistory,
      | "id"
      | "version"
      | "createTs"
      | "createdBy"
      | "updateTs"
      | "updatedBy"
      | "deleteTs"
      | "deletedBy"
      | "jobRequestStatus"
      | "legacyID"
      | "jobRequest"
    >
  : never;
