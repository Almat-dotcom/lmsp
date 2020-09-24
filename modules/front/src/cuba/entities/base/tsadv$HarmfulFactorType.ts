import { AbstractDictionary } from "./AbstractDictionary";
export class HarmfulFactorType extends AbstractDictionary {
  static NAME = "tsadv$HarmfulFactorType";
}
export type HarmfulFactorTypeViewName = "_base" | "_local" | "_minimal";
export type HarmfulFactorTypeView<
  V extends HarmfulFactorTypeViewName
> = V extends "_base"
  ? Pick<
      HarmfulFactorType,
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
      HarmfulFactorType,
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
  ? Pick<HarmfulFactorType, "id" | "langValue">
  : never;
