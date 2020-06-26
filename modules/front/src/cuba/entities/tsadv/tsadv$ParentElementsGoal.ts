import { BaseUuidEntity } from "../base/sys$BaseUuidEntity";
export class ParentElementsGoal extends BaseUuidEntity {
  static NAME = "tsadv$ParentElementsGoal";
  elementType?: number | null;
  elementName?: string | null;
  goalName?: string | null;
  goalWeight?: number | null;
}
export type ParentElementsGoalViewName = "_base" | "_local" | "_minimal";
export type ParentElementsGoalView<
  V extends ParentElementsGoalViewName
> = never;
