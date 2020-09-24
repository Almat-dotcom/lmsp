import { AbstractDictionary } from "./AbstractDictionary";
export class DicBusinessTripType extends AbstractDictionary {
  static NAME = "tsadv$DicBusinessTripType";
  timesheetCode?: string | null;
  timecardWeekendCode?: string | null;
  workingDay?: boolean | null;
}
export type DicBusinessTripTypeViewName =
  | "_base"
  | "_local"
  | "_minimal"
  | "dicBusinessTripType-view";
export type DicBusinessTripTypeView<
  V extends DicBusinessTripTypeViewName
> = V extends "_base"
  ? Pick<
      DicBusinessTripType,
      | "id"
      | "langValue"
      | "timesheetCode"
      | "timecardWeekendCode"
      | "workingDay"
      | "legacyID"
      | "langValue1"
      | "description1"
      | "langValue2"
      | "description2"
      | "langValue3"
      | "description3"
      | "langValue4"
      | "description4"
      | "langValue5"
      | "description5"
      | "startDate"
      | "endDate"
      | "code"
      | "isSystemRecord"
      | "active"
      | "order"
      | "description"
    >
  : V extends "_local"
  ? Pick<
      DicBusinessTripType,
      | "id"
      | "timesheetCode"
      | "timecardWeekendCode"
      | "workingDay"
      | "legacyID"
      | "langValue1"
      | "description1"
      | "langValue2"
      | "description2"
      | "langValue3"
      | "description3"
      | "langValue4"
      | "description4"
      | "langValue5"
      | "description5"
      | "startDate"
      | "endDate"
      | "code"
      | "isSystemRecord"
      | "active"
      | "order"
      | "langValue"
      | "description"
    >
  : V extends "_minimal"
  ? Pick<DicBusinessTripType, "id" | "langValue">
  : V extends "dicBusinessTripType-view"
  ? Pick<
      DicBusinessTripType,
      | "id"
      | "timesheetCode"
      | "timecardWeekendCode"
      | "workingDay"
      | "legacyID"
      | "langValue1"
      | "description1"
      | "langValue2"
      | "description2"
      | "langValue3"
      | "description3"
      | "langValue4"
      | "description4"
      | "langValue5"
      | "description5"
      | "startDate"
      | "endDate"
      | "code"
      | "isSystemRecord"
      | "active"
      | "order"
      | "langValue"
      | "description"
    >
  : never;
