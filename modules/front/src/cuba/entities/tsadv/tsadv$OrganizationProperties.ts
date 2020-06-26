import { StandardEntity } from "../base/sys$StandardEntity";
export class OrganizationProperties extends StandardEntity {
  static NAME = "tsadv$OrganizationProperties";
  organization?: any | null;
  functionalCurrency?: any | null;
}
export type OrganizationPropertiesViewName = "_base" | "_local" | "_minimal";
export type OrganizationPropertiesView<
  V extends OrganizationPropertiesViewName
> = V extends "_base"
  ? Pick<OrganizationProperties, "id" | "organization">
  : V extends "_minimal"
  ? Pick<OrganizationProperties, "id" | "organization">
  : never;
