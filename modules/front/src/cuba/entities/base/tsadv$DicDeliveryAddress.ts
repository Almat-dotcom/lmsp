import { AbstractDictionary } from "./AbstractDictionary";
export class DicDeliveryAddress extends AbstractDictionary {
  static NAME = "tsadv$DicDeliveryAddress";
}
export type DicDeliveryAddressViewName = "_base" | "_local" | "_minimal";
export type DicDeliveryAddressView<
  V extends DicDeliveryAddressViewName
> = V extends "_base"
  ? Pick<
      DicDeliveryAddress,
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
      DicDeliveryAddress,
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
  ? Pick<DicDeliveryAddress, "id" | "langValue">
  : never;
