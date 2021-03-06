import { AbstractParentEntity } from "./AbstractParentEntity";
import { ScheduleSummary } from "./tsadv$ScheduleSummary";
import { DicScheduleElementType } from "./tsadv$DicScheduleElementType";
export class ScheduleDetail extends AbstractParentEntity {
  static NAME = "tsadv$ScheduleDetail";
  summary?: ScheduleSummary | null;
  day?: number | null;
  dayDate?: any | null;
  hours?: any | null;
  timeIn?: any | null;
  timeOut?: any | null;
  elementType?: DicScheduleElementType | null;
}
export type ScheduleDetailViewName =
  | "_base"
  | "_local"
  | "_minimal"
  | "scheduleDetail.view";
export type ScheduleDetailView<
  V extends ScheduleDetailViewName
> = V extends "_base"
  ? Pick<
      ScheduleDetail,
      "id" | "day" | "dayDate" | "hours" | "timeIn" | "timeOut" | "legacyID"
    >
  : V extends "_local"
  ? Pick<
      ScheduleDetail,
      "id" | "day" | "dayDate" | "hours" | "timeIn" | "timeOut" | "legacyID"
    >
  : V extends "_minimal"
  ? Pick<ScheduleDetail, "id">
  : V extends "scheduleDetail.view"
  ? Pick<
      ScheduleDetail,
      | "id"
      | "day"
      | "dayDate"
      | "hours"
      | "timeIn"
      | "timeOut"
      | "legacyID"
      | "summary"
      | "elementType"
    >
  : never;
