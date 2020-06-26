import { StandardEntity } from "../base/sys$StandardEntity";
export class AssignedPerformancePlan extends StandardEntity {
  static NAME = "tsadv$AssignedPerformancePlan";
  performancePlan?: any | null;
  assignedPerson?: any | null;
  assigned_by?: any | null;
}
export type AssignedPerformancePlanViewName = "_base" | "_local" | "_minimal";
export type AssignedPerformancePlanView<
  V extends AssignedPerformancePlanViewName
> = never;
