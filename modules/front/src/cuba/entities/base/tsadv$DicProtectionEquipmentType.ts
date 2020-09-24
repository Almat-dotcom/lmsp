import { AbstractDictionary } from "./AbstractDictionary";
export class DicProtectionEquipmentType extends AbstractDictionary {
  static NAME = "tsadv$DicProtectionEquipmentType";
}
export type DicProtectionEquipmentTypeViewName =
  | "_base"
  | "_local"
  | "_minimal";
export type DicProtectionEquipmentTypeView<
  V extends DicProtectionEquipmentTypeViewName
> = V extends "_base"
  ? Pick<
      DicProtectionEquipmentType,
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
      DicProtectionEquipmentType,
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
  ? Pick<DicProtectionEquipmentType, "id" | "langValue">
  : never;
