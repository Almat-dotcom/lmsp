import { AbstractDictionary } from "./AbstractDictionary";
export class DicOrderReason extends AbstractDictionary {
  static NAME = "tsadv$DicOrderReason";
}
export type DicOrderReasonViewName = "_base" | "_local" | "_minimal";
export type DicOrderReasonView<
  V extends DicOrderReasonViewName
> = V extends "_base"
  ? Pick<
      DicOrderReason,
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
      DicOrderReason,
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
  ? Pick<DicOrderReason, "id" | "langValue">
  : never;
