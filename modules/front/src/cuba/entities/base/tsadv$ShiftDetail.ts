import { AbstractParentEntity } from "./AbstractParentEntity";
import { Shift } from "./tsadv$Shift";
import { DicScheduleElementType } from "./tsadv$DicScheduleElementType";
export class ShiftDetail extends AbstractParentEntity {
  static NAME = "tsadv$ShiftDetail";
  name?: string | null;
  timeFrom?: any | null;
  timeTo?: any | null;
  shift?: Shift | null;
  elementType?: DicScheduleElementType | null;
  dayFrom?: number | null;
  dayTo?: number | null;
}
export type ShiftDetailViewName =
  | "_base"
  | "_local"
  | "_minimal"
  | "shiftDetail.view";
export type ShiftDetailView<V extends ShiftDetailViewName> = V extends "_base"
  ? Pick<
      ShiftDetail,
      "id" | "name" | "timeFrom" | "timeTo" | "dayFrom" | "dayTo" | "legacyID"
    >
  : V extends "_local"
  ? Pick<
      ShiftDetail,
      "id" | "name" | "timeFrom" | "timeTo" | "dayFrom" | "dayTo" | "legacyID"
    >
  : V extends "_minimal"
  ? Pick<ShiftDetail, "id">
  : V extends "shiftDetail.view"
  ? Pick<
      ShiftDetail,
      | "id"
      | "name"
      | "timeFrom"
      | "timeTo"
      | "dayFrom"
      | "dayTo"
      | "legacyID"
      | "shift"
      | "elementType"
    >
  : never;
