import { AbstractDictionary } from "./AbstractDictionary";
export class DicFireSafetyCategory extends AbstractDictionary {
  static NAME = "tsadv$DicFireSafetyCategory";
}
export type DicFireSafetyCategoryViewName = "_base" | "_local" | "_minimal";
export type DicFireSafetyCategoryView<
  V extends DicFireSafetyCategoryViewName
> = V extends "_base"
  ? Pick<
      DicFireSafetyCategory,
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
      DicFireSafetyCategory,
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
  ? Pick<DicFireSafetyCategory, "id" | "langValue">
  : never;
