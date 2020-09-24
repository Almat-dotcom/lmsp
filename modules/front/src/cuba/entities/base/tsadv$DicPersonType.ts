import { AbstractDictionary } from "./AbstractDictionary";
export class DicPersonType extends AbstractDictionary {
  static NAME = "tsadv$DicPersonType";
  sortOrder?: number | null;
}
export type DicPersonTypeViewName =
  | "_base"
  | "_local"
  | "_minimal"
  | "dicPersonType.all";
export type DicPersonTypeView<
  V extends DicPersonTypeViewName
> = V extends "_base"
  ? Pick<
      DicPersonType,
      | "id"
      | "langValue"
      | "sortOrder"
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
      DicPersonType,
      | "id"
      | "sortOrder"
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
  ? Pick<DicPersonType, "id" | "langValue">
  : V extends "dicPersonType.all"
  ? Pick<
      DicPersonType,
      | "id"
      | "sortOrder"
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
  : never;
