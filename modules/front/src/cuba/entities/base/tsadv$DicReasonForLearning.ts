import { AbstractDictionary } from "./AbstractDictionary";
export class DicReasonForLearning extends AbstractDictionary {
  static NAME = "tsadv$DicReasonForLearning";
}
export type DicReasonForLearningViewName = "_base" | "_local" | "_minimal";
export type DicReasonForLearningView<
  V extends DicReasonForLearningViewName
> = V extends "_base"
  ? Pick<
      DicReasonForLearning,
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
      DicReasonForLearning,
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
  ? Pick<DicReasonForLearning, "id" | "langValue">
  : never;
