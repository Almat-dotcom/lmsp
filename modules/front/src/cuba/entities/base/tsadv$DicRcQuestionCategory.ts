import { AbstractDictionary } from "./AbstractDictionary";
export class DicRcQuestionCategory extends AbstractDictionary {
  static NAME = "tsadv$DicRcQuestionCategory";
}
export type DicRcQuestionCategoryViewName = "_base" | "_local" | "_minimal";
export type DicRcQuestionCategoryView<
  V extends DicRcQuestionCategoryViewName
> = V extends "_base"
  ? Pick<
      DicRcQuestionCategory,
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
      DicRcQuestionCategory,
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
  ? Pick<DicRcQuestionCategory, "id" | "langValue">
  : never;
