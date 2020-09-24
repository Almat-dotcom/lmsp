import { AbstractDictionary } from "./AbstractDictionary";
export class DicLearningHistoryStatus extends AbstractDictionary {
  static NAME = "tsadv$DicLearningHistoryStatus";
}
export type DicLearningHistoryStatusViewName = "_base" | "_local" | "_minimal";
export type DicLearningHistoryStatusView<
  V extends DicLearningHistoryStatusViewName
> = V extends "_base"
  ? Pick<
      DicLearningHistoryStatus,
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
      DicLearningHistoryStatus,
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
  ? Pick<DicLearningHistoryStatus, "id" | "langValue">
  : never;
