import { StandardEntity } from "../base/sys$StandardEntity";
export class PositionSsView extends StandardEntity {
  static NAME = "tsadv$PositionSsView";
  positionNameRu?: string | null;
  positionNameKz?: string | null;
  positionNameEn?: string | null;
  positionName?: string | null;
  startDate?: any | null;
  endDate?: any | null;
  maxStartDate?: string | null;
  positionGroup?: any | null;
  organizationGroup?: any | null;
  gradeGroup?: any | null;
  fte?: any | null;
  costCenter?: string | null;
}
export type PositionSsViewViewName = "_base" | "_local" | "_minimal";
export type PositionSsViewView<
  V extends PositionSsViewViewName
> = V extends "_base"
  ? Pick<
      PositionSsView,
      | "id"
      | "positionNameRu"
      | "positionNameKz"
      | "positionNameEn"
      | "startDate"
      | "endDate"
      | "maxStartDate"
      | "fte"
      | "costCenter"
    >
  : V extends "_local"
  ? Pick<
      PositionSsView,
      | "id"
      | "positionNameRu"
      | "positionNameKz"
      | "positionNameEn"
      | "startDate"
      | "endDate"
      | "maxStartDate"
      | "fte"
      | "costCenter"
    >
  : never;
