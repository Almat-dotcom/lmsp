import { AbstractParentEntity } from "./AbstractParentEntity";
import { ScheduleHeader } from "./tsadv$ScheduleHeader";
import { Shift } from "./tsadv$Shift";
import { DicScheduleElementType } from "./tsadv$DicScheduleElementType";
import { ScheduleDetail } from "./tsadv$ScheduleDetail";
export class ScheduleSummary extends AbstractParentEntity {
  static NAME = "tsadv$ScheduleSummary";
  header?: ScheduleHeader | null;
  day?: number | null;
  dayDate?: any | null;
  shift?: Shift | null;
  hours?: any | null;
  baseHours?: any | null;
  startTime?: any | null;
  endTime?: any | null;
  elementType?: DicScheduleElementType | null;
  correctionFlag?: boolean | null;
  details?: ScheduleDetail[] | null;
  displayValue?: string | null;
  shiftName?: string | null;
}
export type ScheduleSummaryViewName =
  | "_base"
  | "_local"
  | "_minimal"
  | "scheduleSummary.view";
export type ScheduleSummaryView<
  V extends ScheduleSummaryViewName
> = V extends "_base"
  ? Pick<
      ScheduleSummary,
      | "id"
      | "day"
      | "dayDate"
      | "hours"
      | "baseHours"
      | "startTime"
      | "endTime"
      | "correctionFlag"
      | "displayValue"
      | "shiftName"
      | "legacyID"
    >
  : V extends "_local"
  ? Pick<
      ScheduleSummary,
      | "id"
      | "day"
      | "dayDate"
      | "hours"
      | "baseHours"
      | "startTime"
      | "endTime"
      | "correctionFlag"
      | "displayValue"
      | "shiftName"
      | "legacyID"
    >
  : V extends "_minimal"
  ? Pick<ScheduleSummary, "id">
  : V extends "scheduleSummary.view"
  ? Pick<
      ScheduleSummary,
      | "id"
      | "day"
      | "dayDate"
      | "hours"
      | "baseHours"
      | "startTime"
      | "endTime"
      | "correctionFlag"
      | "displayValue"
      | "shiftName"
      | "legacyID"
      | "header"
      | "shift"
      | "elementType"
    >
  : never;
