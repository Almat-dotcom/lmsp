import { AbstractDictionary } from "./AbstractDictionary";
export class DicEducationalEstablishmentType extends AbstractDictionary {
  static NAME = "tsadv$DicEducationalEstablishmentType";
}
export type DicEducationalEstablishmentTypeViewName =
  | "_base"
  | "_local"
  | "_minimal";
export type DicEducationalEstablishmentTypeView<
  V extends DicEducationalEstablishmentTypeViewName
> = V extends "_base"
  ? Pick<
      DicEducationalEstablishmentType,
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
      DicEducationalEstablishmentType,
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
  ? Pick<DicEducationalEstablishmentType, "id" | "langValue">
  : never;
