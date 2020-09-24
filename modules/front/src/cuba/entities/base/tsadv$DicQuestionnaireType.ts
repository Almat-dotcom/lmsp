import { AbstractDictionary } from "./AbstractDictionary";
export class DicQuestionnaireType extends AbstractDictionary {
  static NAME = "tsadv$DicQuestionnaireType";
}
export type DicQuestionnaireTypeViewName = "_base" | "_local" | "_minimal";
export type DicQuestionnaireTypeView<
  V extends DicQuestionnaireTypeViewName
> = V extends "_base"
  ? Pick<
      DicQuestionnaireType,
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
      DicQuestionnaireType,
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
  ? Pick<DicQuestionnaireType, "id" | "langValue">
  : never;
