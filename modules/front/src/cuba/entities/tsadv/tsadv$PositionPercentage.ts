import { BaseUuidEntity } from "../base/sys$BaseUuidEntity";
export class PositionPercentage extends BaseUuidEntity {
  static NAME = "tsadv$PositionPercentage";
  position?: any | null;
  organization?: any | null;
  location?: any | null;
  allCount?: number | null;
  count?: number | null;
  match?: number | null;
}
export type PositionPercentageViewName = "_base" | "_local" | "_minimal";
export type PositionPercentageView<
  V extends PositionPercentageViewName
> = never;
