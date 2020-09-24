import { AbstractDictionary } from "./AbstractDictionary";
export class DicGoalCategory extends AbstractDictionary {
  static NAME = "tsadv$DicGoalCategory";
}
export type DicGoalCategoryViewName =
  | "_base"
  | "_local"
  | "_minimal"
  | "dicGoalCategory.browse";
export type DicGoalCategoryView<
  V extends DicGoalCategoryViewName
> = V extends "_base"
  ? Pick<
      DicGoalCategory,
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
      DicGoalCategory,
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
  ? Pick<DicGoalCategory, "id" | "langValue">
  : V extends "dicGoalCategory.browse"
  ? Pick<
      DicGoalCategory,
      | "id"
      | "langValue1"
      | "langValue2"
      | "langValue3"
      | "langValue4"
      | "langValue5"
      | "isSystemRecord"
    >
  : never;
