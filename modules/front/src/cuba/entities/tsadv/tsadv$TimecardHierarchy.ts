import { BaseUuidEntity } from "../base/sys$BaseUuidEntity";
export class TimecardHierarchy extends BaseUuidEntity {
  static NAME = "tsadv$TimecardHierarchy";
  parent?: TimecardHierarchy | null;
  organizationGroup?: any | null;
  positionGroup?: any | null;
  elementType?: number | null;
  idPath?: string | null;
  startDate?: any | null;
  endDate?: any | null;
  level?: number | null;
  personGroup?: any | null;
  hasChild?: boolean | null;
  name?: string | null;
}
export type TimecardHierarchyViewName = "_base" | "_local" | "_minimal";
export type TimecardHierarchyView<
  V extends TimecardHierarchyViewName
> = V extends "_base"
  ? Pick<
      TimecardHierarchy,
      | "id"
      | "elementType"
      | "idPath"
      | "startDate"
      | "endDate"
      | "level"
      | "name"
    >
  : V extends "_local"
  ? Pick<
      TimecardHierarchy,
      | "id"
      | "elementType"
      | "idPath"
      | "startDate"
      | "endDate"
      | "level"
      | "name"
    >
  : never;
