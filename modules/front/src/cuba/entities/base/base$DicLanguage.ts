import { AbstractSortableDictionary } from "./AbstractSortableDictionary";
export class DicLanguage extends AbstractSortableDictionary {
  static NAME = "base$DicLanguage";
}
export type DicLanguageViewName =
  | "_base"
  | "_local"
  | "_minimal"
  | "dicLanguage.langValueAndCode.view";
export type DicLanguageView<V extends DicLanguageViewName> = V extends "_base"
  ? Pick<
      DicLanguage,
      | "id"
      | "languageValue"
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
  : V extends "_local"
  ? Pick<
      DicLanguage,
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
      | "languageValue"
    >
  : V extends "_minimal"
  ? Pick<DicLanguage, "id" | "languageValue">
  : V extends "dicLanguage.langValueAndCode.view"
  ? Pick<
      DicLanguage,
      | "id"
      | "languageValue"
      | "langValue1"
      | "langValue2"
      | "langValue3"
      | "langValue4"
      | "langValue5"
      | "code"
    >
  : never;
