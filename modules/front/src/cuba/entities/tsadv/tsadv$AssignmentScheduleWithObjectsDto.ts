import { BaseUuidEntity } from "../base/sys$BaseUuidEntity";
export class AssignmentScheduleWithObjectsDto extends BaseUuidEntity {
  static NAME = "tsadv$AssignmentScheduleWithObjectsDto";
  assignmentSchedule?: any | null;
}
export type AssignmentScheduleWithObjectsDtoViewName =
  | "_base"
  | "_local"
  | "_minimal";
export type AssignmentScheduleWithObjectsDtoView<
  V extends AssignmentScheduleWithObjectsDtoViewName
> = never;
