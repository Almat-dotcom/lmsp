import { AbstractDictionary } from "./AbstractDictionary";
export class DicQuestionnaireQuestionSection extends AbstractDictionary {
  static NAME = "tsadv$DicQuestionnaireQuestionSection";
}
export type DicQuestionnaireQuestionSectionViewName =
  | "_base"
  | "_local"
  | "_minimal";
export type DicQuestionnaireQuestionSectionView<
  V extends DicQuestionnaireQuestionSectionViewName
> = V extends "_base"
  ? Pick<
      DicQuestionnaireQuestionSection,
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
      DicQuestionnaireQuestionSection,
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
  ? Pick<DicQuestionnaireQuestionSection, "id" | "langValue">
  : never;
