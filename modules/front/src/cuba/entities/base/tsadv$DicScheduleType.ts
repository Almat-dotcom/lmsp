import { AbstractDictionary } from "./AbstractDictionary";
export class DicScheduleType extends AbstractDictionary {
  static NAME = "tsadv$DicScheduleType";
}
export type DicScheduleTypeViewName = "_base" | "_local" | "_minimal";
export type DicScheduleTypeView<
  V extends DicScheduleTypeViewName
> = V extends "_base"
  ? Pick<
      DicScheduleType,
      | "id"
      | "langValue"
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
      DicScheduleType,
      | "id"
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
  ? Pick<DicScheduleType, "id" | "langValue">
  : never;
