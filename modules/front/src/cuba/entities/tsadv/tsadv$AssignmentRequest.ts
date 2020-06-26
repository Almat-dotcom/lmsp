import { StandardEntity } from "../base/sys$StandardEntity";
import { FileDescriptor } from "../base/sys$FileDescriptor";
export class AssignmentRequest extends StandardEntity {
  static NAME = "tsadv$AssignmentRequest";
  dateFrom?: any | null;
  status?: any | null;
  requestNumber?: any | null;
  positionGroup?: any | null;
  gradeGroup?: any | null;
  organizationGroup?: any | null;
  jobGroup?: any | null;
  note?: string | null;
  personGroup?: any | null;
  attachment?: FileDescriptor | null;
  actualPositionGroup?: any | null;
  substitutedEmployee?: any | null;
}
export type AssignmentRequestViewName = "_base" | "_local" | "_minimal";
export type AssignmentRequestView<
  V extends AssignmentRequestViewName
> = V extends "_base"
  ? Pick<AssignmentRequest, "id" | "dateFrom" | "requestNumber" | "note">
  : V extends "_local"
  ? Pick<AssignmentRequest, "id" | "dateFrom" | "requestNumber" | "note">
  : never;
