import { AbstractParentEntity } from "./AbstractParentEntity";
import { JobGroup } from "./tsadv$JobGroup";
import { Goal } from "./tsadv$Goal";
export class JobGroupGoalLink extends AbstractParentEntity {
  static NAME = "tsadv$JobGroupGoalLink";
  weight?: number | null;
  targetValue?: number | null;
  jobGroup?: JobGroup | null;
  goal?: Goal | null;
}
export type JobGroupGoalLinkViewName =
  | "_base"
  | "_local"
  | "_minimal"
  | "jobGroupGoalLink.edit";
export type JobGroupGoalLinkView<
  V extends JobGroupGoalLinkViewName
> = V extends "_base"
  ? Pick<JobGroupGoalLink, "id" | "weight" | "targetValue" | "legacyID">
  : V extends "_local"
  ? Pick<JobGroupGoalLink, "id" | "weight" | "targetValue" | "legacyID">
  : V extends "jobGroupGoalLink.edit"
  ? Pick<
      JobGroupGoalLink,
      "id" | "weight" | "targetValue" | "legacyID" | "jobGroup" | "goal"
    >
  : never;
