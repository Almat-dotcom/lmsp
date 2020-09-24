import { AbstractSortableDictionary } from "./AbstractSortableDictionary";
export class DicOrgLegalFormType extends AbstractSortableDictionary {
  static NAME = "base$DicOrgLegalFormType";
}
export type DicOrgLegalFormTypeViewName = "_base" | "_local" | "_minimal";
export type DicOrgLegalFormTypeView<
  V extends DicOrgLegalFormTypeViewName
> = V extends "_base"
  ? Pick<
      DicOrgLegalFormType,
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
      DicOrgLegalFormType,
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
  ? Pick<DicOrgLegalFormType, "id" | "languageValue">
  : never;
