import { AbstractDictionary } from "./AbstractDictionary";
export class DicQuestionnaireStatus extends AbstractDictionary {
  static NAME = "tsadv$DicQuestionnaireStatus";
}
export type DicQuestionnaireStatusViewName =
  | "_base"
  | "_local"
  | "_minimal"
  | "dicQuestionnaireStatus.browse";
export type DicQuestionnaireStatusView<
  V extends DicQuestionnaireStatusViewName
> = V extends "_base"
  ? Pick<
      DicQuestionnaireStatus,
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
      DicQuestionnaireStatus,
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
  ? Pick<DicQuestionnaireStatus, "id" | "langValue">
  : V extends "dicQuestionnaireStatus.browse"
  ? Pick<
      DicQuestionnaireStatus,
      | "id"
      | "langValue1"
      | "langValue2"
      | "langValue3"
      | "langValue4"
      | "langValue5"
      | "isSystemRecord"
    >
  : never;
