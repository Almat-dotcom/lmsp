import { StandardEntity } from "../base/sys$StandardEntity";
export class OrganizationStructure extends StandardEntity {
  static NAME = "tsadv$OrganizationStructure";
  hierarchy?: any | null;
  parent?: any | null;
  elementType?: number | null;
  organizationGroup?: any | null;
  parentOrganizationGroup?: any | null;
  pathOrgName1?: string | null;
  pathOrgName2?: string | null;
  pathOrgName3?: string | null;
  startDate?: any | null;
  endDate?: any | null;
  path?: string | null;
  level?: number | null;
}
export type OrganizationStructureViewName = "_base" | "_local" | "_minimal";
export type OrganizationStructureView<
  V extends OrganizationStructureViewName
> = V extends "_base"
  ? Pick<
      OrganizationStructure,
      | "id"
      | "elementType"
      | "pathOrgName1"
      | "pathOrgName2"
      | "pathOrgName3"
      | "startDate"
      | "endDate"
      | "path"
      | "level"
    >
  : V extends "_local"
  ? Pick<
      OrganizationStructure,
      | "id"
      | "elementType"
      | "pathOrgName1"
      | "pathOrgName2"
      | "pathOrgName3"
      | "startDate"
      | "endDate"
      | "path"
      | "level"
    >
  : never;
