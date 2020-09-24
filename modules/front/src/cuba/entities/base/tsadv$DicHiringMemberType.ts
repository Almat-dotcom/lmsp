import { AbstractDictionary } from "./AbstractDictionary";
export class DicHiringMemberType extends AbstractDictionary {
  static NAME = "tsadv$DicHiringMemberType";
}
export type DicHiringMemberTypeViewName = "_base" | "_local" | "_minimal";
export type DicHiringMemberTypeView<
  V extends DicHiringMemberTypeViewName
> = V extends "_base"
  ? Pick<
      DicHiringMemberType,
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
      DicHiringMemberType,
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
  ? Pick<DicHiringMemberType, "id" | "langValue">
  : never;
