import { AbstractSortableDictionary } from "./AbstractSortableDictionary";
export class DicPersonIdentityDocumentType extends AbstractSortableDictionary {
  static NAME = "base$DicPersonIdentityDocumentType";
}
export type DicPersonIdentityDocumentTypeViewName =
  | "_base"
  | "_local"
  | "_minimal";
export type DicPersonIdentityDocumentTypeView<
  V extends DicPersonIdentityDocumentTypeViewName
> = V extends "_base"
  ? Pick<
      DicPersonIdentityDocumentType,
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
      DicPersonIdentityDocumentType,
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
  ? Pick<DicPersonIdentityDocumentType, "id" | "languageValue">
  : never;
