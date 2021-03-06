import { AbstractDictionary } from "./AbstractDictionary";
export class DicPunishmentTypes extends AbstractDictionary {
  static NAME = "tsadv$DicPunishmentTypes";
}
export type DicPunishmentTypesViewName = "_base" | "_local" | "_minimal";
export type DicPunishmentTypesView<
  V extends DicPunishmentTypesViewName
> = V extends "_base"
  ? Pick<
      DicPunishmentTypes,
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
      DicPunishmentTypes,
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
  ? Pick<DicPunishmentTypes, "id" | "langValue">
  : never;
