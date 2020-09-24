import { AbstractSortableDictionary } from "./AbstractSortableDictionary";
export class DicCurrency extends AbstractSortableDictionary {
  static NAME = "base$DicCurrency";
}
export type DicCurrencyViewName = "_base" | "_local" | "_minimal";
export type DicCurrencyView<V extends DicCurrencyViewName> = V extends "_base"
  ? Pick<
      DicCurrency,
      | "id"
      | "languageValue"
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
      DicCurrency,
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
      | "languageValue"
    >
  : V extends "_minimal"
  ? Pick<DicCurrency, "id" | "languageValue">
  : never;
