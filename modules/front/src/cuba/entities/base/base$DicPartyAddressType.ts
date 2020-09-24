import { AbstractSortableDictionary } from "./AbstractSortableDictionary";
export class DicPartyAddressType extends AbstractSortableDictionary {
  static NAME = "base$DicPartyAddressType";
  partyType?: any | null;
  primary?: boolean | null;
}
export type DicPartyAddressTypeViewName = "_base" | "_local" | "_minimal";
export type DicPartyAddressTypeView<
  V extends DicPartyAddressTypeViewName
> = V extends "_base"
  ? Pick<
      DicPartyAddressType,
      | "id"
      | "languageValue"
      | "partyType"
      | "primary"
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
  : V extends "_local"
  ? Pick<
      DicPartyAddressType,
      | "id"
      | "partyType"
      | "primary"
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
      | "languageValue"
    >
  : V extends "_minimal"
  ? Pick<DicPartyAddressType, "id" | "languageValue">
  : never;
