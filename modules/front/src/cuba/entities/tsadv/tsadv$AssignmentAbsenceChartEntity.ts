import { BaseUuidEntity } from "../base/sys$BaseUuidEntity";
export class AssignmentAbsenceChartEntity extends BaseUuidEntity {
  static NAME = "tsadv$AssignmentAbsenceChartEntity";
  personFullName?: string | null;
  absences?: any | null;
  assignmentGroupId?: any | null;
}
export type AssignmentAbsenceChartEntityViewName =
  | "_base"
  | "_local"
  | "_minimal";
export type AssignmentAbsenceChartEntityView<
  V extends AssignmentAbsenceChartEntityViewName
> = never;
