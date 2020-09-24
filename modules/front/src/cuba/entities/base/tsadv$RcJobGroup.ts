import { AbstractParentEntity } from "./AbstractParentEntity";
import { JobGroup } from "./tsadv$JobGroup";
export class RcJobGroup extends AbstractParentEntity {
  static NAME = "tsadv$RcJobGroup";
  groupName?: string | null;
  jobs?: JobGroup[] | null;
}
export type RcJobGroupViewName =
  | "_base"
  | "_local"
  | "_minimal"
  | "rcJobGroup.browse"
  | "rcJobGroup.edit";
export type RcJobGroupView<V extends RcJobGroupViewName> = V extends "_base"
  ? Pick<RcJobGroup, "id" | "groupName" | "legacyID">
  : V extends "_local"
  ? Pick<RcJobGroup, "id" | "groupName" | "legacyID">
  : V extends "_minimal"
  ? Pick<RcJobGroup, "id" | "groupName">
  : V extends "rcJobGroup.browse"
  ? Pick<RcJobGroup, "id" | "groupName" | "legacyID" | "jobs">
  : V extends "rcJobGroup.edit"
  ? Pick<RcJobGroup, "id" | "groupName" | "legacyID" | "jobs">
  : never;
