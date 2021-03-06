import { BaseUuidEntity } from "./sys$BaseUuidEntity";
import { OrganizationGroupExt } from "./base$OrganizationGroupExt";
export class OrganizationTree extends BaseUuidEntity {
  static NAME = "tsadv$OrganizationTree";
  parent?: OrganizationTree | null;
  organizationGroupId?: any | null;
  organizationName?: string | null;
  hasChild?: boolean | null;
  organizationGroupExt?: OrganizationGroupExt | null;
}
export type OrganizationTreeViewName = "_base" | "_local" | "_minimal";
export type OrganizationTreeView<V extends OrganizationTreeViewName> = never;
