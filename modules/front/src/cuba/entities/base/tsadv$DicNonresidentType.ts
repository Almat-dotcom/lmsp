import { AbstractDictionary } from "./AbstractDictionary";
export class DicNonresidentType extends AbstractDictionary {
  static NAME = "tsadv$DicNonresidentType";
}
export type DicNonresidentTypeViewName = "_base" | "_local" | "_minimal";
export type DicNonresidentTypeView<
  V extends DicNonresidentTypeViewName
> = V extends "_base"
  ? Pick<
      DicNonresidentType,
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
      DicNonresidentType,
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
  ? Pick<DicNonresidentType, "id" | "langValue">
  : never;
