import { StandardEntity } from "../base/sys$StandardEntity";
import { Group } from "../base/sec$Group";
export class SecurityOrganizationEligibility extends StandardEntity {
  static NAME = "tsadv$SecurityOrganizationEligibility";
  securityGroup?: Group | null;
  organizationGroup?: any | null;
  include?: boolean | null;
}
export type SecurityOrganizationEligibilityViewName =
  | "_base"
  | "_local"
  | "_minimal";
export type SecurityOrganizationEligibilityView<
  V extends SecurityOrganizationEligibilityViewName
> = V extends "_base"
  ? Pick<SecurityOrganizationEligibility, "id" | "include">
  : V extends "_local"
  ? Pick<SecurityOrganizationEligibility, "id" | "include">
  : never;
