import { StandardEntity } from "../base/sys$StandardEntity";
import { Group } from "../base/sec$Group";
export class SecurityHierarchyNode extends StandardEntity {
  static NAME = "tsadv$SecurityHierarchyNode";
  securityGroup?: Group | null;
  organizationGroup?: any | null;
}
export type SecurityHierarchyNodeViewName = "_base" | "_local" | "_minimal";
export type SecurityHierarchyNodeView<
  V extends SecurityHierarchyNodeViewName
> = never;
