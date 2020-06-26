import { StandardEntity } from "../base/sys$StandardEntity";
import { FileDescriptor } from "../base/sys$FileDescriptor";
export class AssignmentSalaryRequest extends StandardEntity {
  static NAME = "tsadv$AssignmentSalaryRequest";
  personGroup?: any | null;
  actualPositionGroup?: any | null;
  attachment?: FileDescriptor | null;
  requestNumber?: any | null;
  status?: any | null;
  dateFrom?: any | null;
  positionGroup?: any | null;
  gradeGroup?: any | null;
  organizationGroup?: any | null;
  jobGroup?: any | null;
  type?: string | null;
  amount?: any | null;
  changePercent?: any | null;
  netGross?: string | null;
  currency?: any | null;
  reason?: any | null;
  note?: string | null;
  substitutedEmployee?: any | null;
}
export type AssignmentSalaryRequestViewName = "_base" | "_local" | "_minimal";
export type AssignmentSalaryRequestView<
  V extends AssignmentSalaryRequestViewName
> = V extends "_base"
  ? Pick<
      AssignmentSalaryRequest,
      | "id"
      | "requestNumber"
      | "dateFrom"
      | "type"
      | "amount"
      | "changePercent"
      | "netGross"
      | "note"
    >
  : V extends "_local"
  ? Pick<
      AssignmentSalaryRequest,
      | "id"
      | "requestNumber"
      | "dateFrom"
      | "type"
      | "amount"
      | "changePercent"
      | "netGross"
      | "note"
    >
  : never;
