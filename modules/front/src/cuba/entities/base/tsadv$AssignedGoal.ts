import { AbstractParentEntity } from "./AbstractParentEntity";
import { Goal } from "./tsadv$Goal";
import { PersonGroupExt } from "./base$PersonGroupExt";
import { OrganizationGroupExt } from "./base$OrganizationGroupExt";
import { PositionGroupExt } from "./base$PositionGroupExt";
import { JobGroup } from "./tsadv$JobGroup";
import { DicPriority } from "./tsadv$DicPriority";
import { PerformancePlan } from "./tsadv$PerformancePlan";
export class AssignedGoal extends AbstractParentEntity {
  static NAME = "tsadv$AssignedGoal";
  goal?: Goal | null;
  personGroup?: PersonGroupExt | null;
  organizationGroup?: OrganizationGroupExt | null;
  positionGroup?: PositionGroupExt | null;
  jobGroup?: JobGroup | null;
  parentGoal?: Goal | null;
  targetValue?: number | null;
  actualValue?: number | null;
  successCritetia?: string | null;
  assignedByPersonGroup?: PersonGroupExt | null;
  startDate?: any | null;
  endDate?: any | null;
  weight?: number | null;
  priority?: DicPriority | null;
  performancePlan?: PerformancePlan | null;
}
export type AssignedGoalViewName =
  | "_base"
  | "_local"
  | "_minimal"
  | "assignedGoal.assess"
  | "assignedGoal.browse"
  | "assignedGoal.edit"
  | "assignedGoal.save"
  | "assignedGoalForCard";
export type AssignedGoalView<V extends AssignedGoalViewName> = V extends "_base"
  ? Pick<
      AssignedGoal,
      | "id"
      | "goal"
      | "targetValue"
      | "actualValue"
      | "successCritetia"
      | "startDate"
      | "endDate"
      | "weight"
      | "legacyID"
    >
  : V extends "_local"
  ? Pick<
      AssignedGoal,
      | "id"
      | "targetValue"
      | "actualValue"
      | "successCritetia"
      | "startDate"
      | "endDate"
      | "weight"
      | "legacyID"
    >
  : V extends "_minimal"
  ? Pick<AssignedGoal, "id" | "goal">
  : V extends "assignedGoal.assess"
  ? Pick<
      AssignedGoal,
      "id" | "goal" | "personGroup" | "weight" | "performancePlan"
    >
  : V extends "assignedGoal.browse"
  ? Pick<
      AssignedGoal,
      | "id"
      | "goal"
      | "parentGoal"
      | "targetValue"
      | "actualValue"
      | "successCritetia"
      | "startDate"
      | "endDate"
      | "weight"
      | "personGroup"
      | "organizationGroup"
      | "positionGroup"
      | "jobGroup"
      | "assignedByPersonGroup"
      | "priority"
    >
  : V extends "assignedGoal.edit"
  ? Pick<
      AssignedGoal,
      | "id"
      | "goal"
      | "parentGoal"
      | "targetValue"
      | "actualValue"
      | "successCritetia"
      | "startDate"
      | "endDate"
      | "weight"
      | "personGroup"
      | "organizationGroup"
      | "positionGroup"
      | "jobGroup"
      | "assignedByPersonGroup"
      | "priority"
      | "performancePlan"
    >
  : V extends "assignedGoal.save"
  ? Pick<
      AssignedGoal,
      | "id"
      | "targetValue"
      | "actualValue"
      | "successCritetia"
      | "startDate"
      | "endDate"
      | "weight"
      | "legacyID"
      | "goal"
      | "personGroup"
      | "organizationGroup"
      | "positionGroup"
      | "jobGroup"
      | "parentGoal"
      | "assignedByPersonGroup"
      | "priority"
      | "performancePlan"
    >
  : V extends "assignedGoalForCard"
  ? Pick<
      AssignedGoal,
      | "id"
      | "targetValue"
      | "actualValue"
      | "successCritetia"
      | "startDate"
      | "endDate"
      | "weight"
      | "legacyID"
      | "goal"
      | "personGroup"
      | "performancePlan"
    >
  : never;
