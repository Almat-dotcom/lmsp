import { AbstractSortableDictionary } from "./AbstractSortableDictionary";
export class DicContactInfoType extends AbstractSortableDictionary {
  static NAME = "base$DicContactInfoType";
  mask?: string | null;
}
export type DicContactInfoTypeViewName = "_base" | "_local" | "_minimal";
export type DicContactInfoTypeView<
  V extends DicContactInfoTypeViewName
> = V extends "_base"
  ? Pick<
      DicContactInfoType,
      | "id"
      | "languageValue"
      | "mask"
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
      DicContactInfoType,
      | "id"
      | "mask"
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
  ? Pick<DicContactInfoType, "id" | "languageValue">
  : never;
