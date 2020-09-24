import { AbstractDictionary } from "./AbstractDictionary";
export class DicEquipmentReplacementReason extends AbstractDictionary {
  static NAME = "tsadv$DicEquipmentReplacementReason";
}
export type DicEquipmentReplacementReasonViewName =
  | "_base"
  | "_local"
  | "_minimal";
export type DicEquipmentReplacementReasonView<
  V extends DicEquipmentReplacementReasonViewName
> = V extends "_base"
  ? Pick<
      DicEquipmentReplacementReason,
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
      DicEquipmentReplacementReason,
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
  ? Pick<DicEquipmentReplacementReason, "id" | "langValue">
  : never;
