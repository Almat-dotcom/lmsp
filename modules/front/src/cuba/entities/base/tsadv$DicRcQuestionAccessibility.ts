import { AbstractDictionary } from "./AbstractDictionary";
export class DicRcQuestionAccessibility extends AbstractDictionary {
  static NAME = "tsadv$DicRcQuestionAccessibility";
}
export type DicRcQuestionAccessibilityViewName =
  | "_base"
  | "_local"
  | "_minimal";
export type DicRcQuestionAccessibilityView<
  V extends DicRcQuestionAccessibilityViewName
> = V extends "_base"
  ? Pick<
      DicRcQuestionAccessibility,
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
      DicRcQuestionAccessibility,
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
  ? Pick<DicRcQuestionAccessibility, "id" | "langValue">
  : never;
