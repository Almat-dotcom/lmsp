import { AbstractParentEntity } from "./AbstractParentEntity";
import { PositionGroupExt } from "./base$PositionGroupExt";
import { StandardSchedule } from "./tsadv$StandardSchedule";
export class AllowableScheduleForPosition extends AbstractParentEntity {
  static NAME = "tsadv$AllowableScheduleForPosition";
  positionGroup?: PositionGroupExt | null;
  schedule?: StandardSchedule | null;
  startDate?: any | null;
  endDate?: any | null;
}
export type AllowableScheduleForPositionViewName =
  | "_base"
  | "_local"
  | "_minimal"
  | "allowableScheduleForPosition-view";
export type AllowableScheduleForPositionView<
  V extends AllowableScheduleForPositionViewName
> = V extends "_base"
  ? Pick<
      AllowableScheduleForPosition,
      "id" | "startDate" | "endDate" | "legacyID"
    >
  : V extends "_local"
  ? Pick<
      AllowableScheduleForPosition,
      "id" | "startDate" | "endDate" | "legacyID"
    >
  : V extends "allowableScheduleForPosition-view"
  ? Pick<
      AllowableScheduleForPosition,
      "id" | "startDate" | "endDate" | "legacyID" | "schedule"
    >
  : never;
