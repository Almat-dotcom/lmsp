import { AbstractDictionary } from "./AbstractDictionary";
export class DicAttitudeToMilitary extends AbstractDictionary {
  static NAME = "tsadv$DicAttitudeToMilitary";
}
export type DicAttitudeToMilitaryViewName = "_base" | "_local" | "_minimal";
export type DicAttitudeToMilitaryView<
  V extends DicAttitudeToMilitaryViewName
> = V extends "_base"
  ? Pick<
      DicAttitudeToMilitary,
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
      DicAttitudeToMilitary,
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
  ? Pick<DicAttitudeToMilitary, "id" | "langValue">
  : never;
