import { AbstractDictionary } from "./AbstractDictionary";
export class DicAddressType extends AbstractDictionary {
  static NAME = "tsadv$DicAddressType";
}
export type DicAddressTypeViewName = "_base" | "_local" | "_minimal";
export type DicAddressTypeView<
  V extends DicAddressTypeViewName
> = V extends "_base"
  ? Pick<
      DicAddressType,
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
      DicAddressType,
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
  ? Pick<DicAddressType, "id" | "langValue">
  : never;
