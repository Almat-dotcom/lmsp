import { AbstractDictionary } from "./AbstractDictionary";
export class DicReadinessLevel extends AbstractDictionary {
  static NAME = "tsadv$DicReadinessLevel";
}
export type DicReadinessLevelViewName = "_base" | "_local" | "_minimal";
export type DicReadinessLevelView<
  V extends DicReadinessLevelViewName
> = V extends "_base"
  ? Pick<
      DicReadinessLevel,
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
      DicReadinessLevel,
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
  ? Pick<DicReadinessLevel, "id" | "langValue">
  : never;
