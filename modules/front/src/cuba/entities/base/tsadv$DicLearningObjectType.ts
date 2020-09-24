import { AbstractDictionary } from "./AbstractDictionary";
export class DicLearningObjectType extends AbstractDictionary {
  static NAME = "tsadv$DicLearningObjectType";
}
export type DicLearningObjectTypeViewName = "_base" | "_local" | "_minimal";
export type DicLearningObjectTypeView<
  V extends DicLearningObjectTypeViewName
> = V extends "_base"
  ? Pick<
      DicLearningObjectType,
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
      DicLearningObjectType,
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
  ? Pick<DicLearningObjectType, "id" | "langValue">
  : never;
