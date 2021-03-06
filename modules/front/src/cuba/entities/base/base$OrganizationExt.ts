import { Organization } from "./base$Organization";
import { OrganizationGroupExt } from "./base$OrganizationGroupExt";
import { DicCostCenter } from "./tsadv$DicCostCenter";
import { DicPayroll } from "./tsadv$DicPayroll";
export class OrganizationExt extends Organization {
  static NAME = "base$OrganizationExt";
  group?: OrganizationGroupExt | null;
  costCenter?: DicCostCenter | null;
  payroll?: DicPayroll | null;
  internal?: boolean | null;
  organizationNameLang1Reducted?: string | null;
  organizationNameLang2Reducted?: string | null;
  organizationNameLang3Reducted?: string | null;
  organizationNameLang4Reducted?: string | null;
  organizationNameLang5Reducted?: string | null;
}
export type OrganizationExtViewName =
  | "_base"
  | "_local"
  | "_minimal"
  | "organization.edit"
  | "organization.lookup"
  | "organizationGroup.relevantOrganization.browse"
  | "organizations.browse";
export type OrganizationExtView<
  V extends OrganizationExtViewName
> = V extends "_base"
  ? Pick<
      OrganizationExt,
      | "id"
      | "organizationName"
      | "internal"
      | "organizationNameLang1Reducted"
      | "organizationNameLang2Reducted"
      | "organizationNameLang3Reducted"
      | "organizationNameLang4Reducted"
      | "organizationNameLang5Reducted"
      | "legacyID"
      | "startDate"
      | "endDate"
      | "writeHistory"
      | "organizationNameLang1"
      | "organizationNameLang2"
      | "organizationNameLang3"
      | "organizationNameLang4"
      | "organizationNameLang5"
    >
  : V extends "_local"
  ? Pick<
      OrganizationExt,
      | "id"
      | "internal"
      | "organizationNameLang1Reducted"
      | "organizationNameLang2Reducted"
      | "organizationNameLang3Reducted"
      | "organizationNameLang4Reducted"
      | "organizationNameLang5Reducted"
      | "legacyID"
      | "startDate"
      | "endDate"
      | "writeHistory"
      | "organizationNameLang1"
      | "organizationNameLang2"
      | "organizationNameLang3"
      | "organizationNameLang4"
      | "organizationNameLang5"
    >
  : V extends "_minimal"
  ? Pick<OrganizationExt, "id" | "organizationName">
  : V extends "organization.edit"
  ? Pick<
      OrganizationExt,
      | "id"
      | "organizationName"
      | "payroll"
      | "group"
      | "location"
      | "costCenter"
      | "type"
      | "startDate"
      | "endDate"
      | "writeHistory"
      | "legacyID"
      | "organizationNameLang1"
      | "organizationNameLang2"
      | "organizationNameLang3"
      | "organizationNameLang4"
      | "organizationNameLang5"
      | "internal"
    >
  : V extends "organization.lookup"
  ? Pick<
      OrganizationExt,
      | "id"
      | "internal"
      | "organizationNameLang1Reducted"
      | "organizationNameLang2Reducted"
      | "organizationNameLang3Reducted"
      | "organizationNameLang4Reducted"
      | "organizationNameLang5Reducted"
      | "legacyID"
      | "startDate"
      | "endDate"
      | "writeHistory"
      | "organizationNameLang1"
      | "organizationNameLang2"
      | "organizationNameLang3"
      | "organizationNameLang4"
      | "organizationNameLang5"
      | "group"
    >
  : V extends "organizationGroup.relevantOrganization.browse"
  ? Pick<
      OrganizationExt,
      | "id"
      | "organizationName"
      | "internal"
      | "organizationNameLang1Reducted"
      | "organizationNameLang2Reducted"
      | "organizationNameLang3Reducted"
      | "organizationNameLang4Reducted"
      | "organizationNameLang5Reducted"
      | "legacyID"
      | "startDate"
      | "endDate"
      | "writeHistory"
      | "organizationNameLang1"
      | "organizationNameLang2"
      | "organizationNameLang3"
      | "organizationNameLang4"
      | "organizationNameLang5"
    >
  : V extends "organizations.browse"
  ? Pick<
      OrganizationExt,
      | "id"
      | "organizationName"
      | "payroll"
      | "group"
      | "location"
      | "costCenter"
      | "type"
    >
  : never;
