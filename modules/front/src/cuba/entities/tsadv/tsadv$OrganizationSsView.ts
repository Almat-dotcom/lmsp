import { StandardEntity } from "../base/sys$StandardEntity";
export class OrganizationSsView extends StandardEntity {
  static NAME = "tsadv$OrganizationSsView";
  startDate?: any | null;
  endDate?: any | null;
  maxStartDate?: string | null;
  organizationGroup?: any | null;
  organizationNameRu?: string | null;
  organizationNameKz?: string | null;
  organizationNameEn?: string | null;
  organizationName?: string | null;
  costCenter?: string | null;
}
export type OrganizationSsViewViewName = "_base" | "_local" | "_minimal";
export type OrganizationSsViewView<
  V extends OrganizationSsViewViewName
> = V extends "_base"
  ? Pick<
      OrganizationSsView,
      | "id"
      | "startDate"
      | "endDate"
      | "maxStartDate"
      | "organizationNameRu"
      | "organizationNameKz"
      | "organizationNameEn"
      | "costCenter"
    >
  : V extends "_local"
  ? Pick<
      OrganizationSsView,
      | "id"
      | "startDate"
      | "endDate"
      | "maxStartDate"
      | "organizationNameRu"
      | "organizationNameKz"
      | "organizationNameEn"
      | "costCenter"
    >
  : never;
