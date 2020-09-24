import { AbstractDictionary } from "./AbstractDictionary";
export class DicQuestionType extends AbstractDictionary {
  static NAME = "tsadv$DicQuestionType";
}
export type DicQuestionTypeViewName =
  | "_base"
  | "_local"
  | "_minimal"
  | "dicQuestionType.browse";
export type DicQuestionTypeView<
  V extends DicQuestionTypeViewName
> = V extends "_base"
  ? Pick<
      DicQuestionType,
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
      DicQuestionType,
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
  ? Pick<DicQuestionType, "id" | "langValue">
  : V extends "dicQuestionType.browse"
  ? Pick<
      DicQuestionType,
      | "id"
      | "langValue1"
      | "langValue2"
      | "langValue3"
      | "langValue4"
      | "langValue5"
      | "code"
      | "isSystemRecord"
    >
  : never;
