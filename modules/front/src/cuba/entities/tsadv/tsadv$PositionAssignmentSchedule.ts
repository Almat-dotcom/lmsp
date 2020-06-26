import { BaseUuidEntity } from "../base/sys$BaseUuidEntity";
export class Timesheet extends BaseUuidEntity {
  static NAME = "tsadv$PositionAssignmentSchedule";
  name?: string | null;
  assignmentGroup?: any | null;
  assignmentSchedules?: any | null;
}
export type TimesheetViewName = "_base" | "_local" | "_minimal";
export type TimesheetView<V extends TimesheetViewName> = V extends "_base"
  ? Pick<Timesheet, "id">
  : V extends "_minimal"
  ? Pick<Timesheet, "id">
  : never;
