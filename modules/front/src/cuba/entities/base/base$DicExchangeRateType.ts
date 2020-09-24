import { AbstractDictionary } from "./AbstractDictionary";
export class DicExchangeRateType extends AbstractDictionary {
  static NAME = "base$DicExchangeRateType";
}
export type DicExchangeRateTypeViewName = "_base" | "_local" | "_minimal";
export type DicExchangeRateTypeView<
  V extends DicExchangeRateTypeViewName
> = V extends "_base"
  ? Pick<
      DicExchangeRateType,
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
      DicExchangeRateType,
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
  ? Pick<DicExchangeRateType, "id" | "langValue">
  : never;
