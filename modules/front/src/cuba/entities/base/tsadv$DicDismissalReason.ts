import { AbstractDictionary } from "./AbstractDictionary";
export class DicDismissalReason extends AbstractDictionary {
  static NAME = "tsadv$DicDismissalReason";
}
export type DicDismissalReasonViewName = "_base" | "_local" | "_minimal";
export type DicDismissalReasonView<
  V extends DicDismissalReasonViewName
> = V extends "_base"
  ? Pick<
      DicDismissalReason,
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
      DicDismissalReason,
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
  ? Pick<DicDismissalReason, "id" | "langValue">
  : never;
