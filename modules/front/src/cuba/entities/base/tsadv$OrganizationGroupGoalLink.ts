import { AbstractParentEntity } from "./AbstractParentEntity";
import { Goal } from "./tsadv$Goal";
import { OrganizationGroupExt } from "./base$OrganizationGroupExt";
export class OrganizationGroupGoalLink extends AbstractParentEntity {
  static NAME = "tsadv$OrganizationGroupGoalLink";
  weight?: number | null;
  targetValue?: number | null;
  goal?: Goal | null;
  organizationGroup?: OrganizationGroupExt | null;
}
export type OrganizationGroupGoalLinkViewName =
  | "_base"
  | "_local"
  | "_minimal"
  | "organizationGroupGoalLink-view";
export type OrganizationGroupGoalLinkView<
  V extends OrganizationGroupGoalLinkViewName
> = V extends "_base"
  ? Pick<
      OrganizationGroupGoalLink,
      "id" | "weight" | "targetValue" | "legacyID"
    >
  : V extends "_local"
  ? Pick<
      OrganizationGroupGoalLink,
      "id" | "weight" | "targetValue" | "legacyID"
    >
  : V extends "organizationGroupGoalLink-view"
  ? Pick<
      OrganizationGroupGoalLink,
      | "id"
      | "weight"
      | "targetValue"
      | "legacyID"
      | "organizationGroup"
      | "goal"
    >
  : never;
