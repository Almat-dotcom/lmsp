import { AbstractDictionary } from "./AbstractDictionary";
export class DicTestType extends AbstractDictionary {
  static NAME = "tsadv$DicTestType";
}
export type DicTestTypeViewName =
  | "_base"
  | "_local"
  | "_minimal"
  | "dicTestType.browse";
export type DicTestTypeView<V extends DicTestTypeViewName> = V extends "_base"
  ? Pick<
      DicTestType,
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
      DicTestType,
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
  ? Pick<DicTestType, "id" | "langValue">
  : V extends "dicTestType.browse"
  ? Pick<
      DicTestType,
      | "id"
      | "langValue1"
      | "langValue2"
      | "langValue3"
      | "langValue4"
      | "langValue5"
      | "startDate"
      | "endDate"
      | "code"
      | "isSystemRecord"
    >
  : never;
