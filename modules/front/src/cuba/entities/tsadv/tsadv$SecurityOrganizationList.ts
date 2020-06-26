import { StandardEntity } from "../base/sys$StandardEntity";
import { Group } from "../base/sec$Group";
export class SecurityOrganizationList extends StandardEntity {
  static NAME = "tsadv$SecurityOrganizationList";
  securityGroup?: Group | null;
  organizationGroup?: any | null;
  transactionDate?: any | null;
}
export type SecurityOrganizationListViewName = "_base" | "_local" | "_minimal";
export type SecurityOrganizationListView<
  V extends SecurityOrganizationListViewName
> = V extends "_base"
  ? Pick<SecurityOrganizationList, "id" | "transactionDate">
  : V extends "_local"
  ? Pick<SecurityOrganizationList, "id" | "transactionDate">
  : never;
