import { AbstractDictionary } from "./AbstractDictionary";
export class TechnicalStatusDictionary extends AbstractDictionary {
  static NAME = "tsadv$TechnicalStatusDictionary";
}
export type TechnicalStatusDictionaryViewName = "_base" | "_local" | "_minimal";
export type TechnicalStatusDictionaryView<
  V extends TechnicalStatusDictionaryViewName
> = V extends "_base"
  ? Pick<
      TechnicalStatusDictionary,
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
      TechnicalStatusDictionary,
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
  ? Pick<TechnicalStatusDictionary, "id" | "langValue">
  : never;
