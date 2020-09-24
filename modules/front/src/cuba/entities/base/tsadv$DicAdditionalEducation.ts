import { AbstractDictionary } from "./AbstractDictionary";
export class DicAdditionalEducation extends AbstractDictionary {
  static NAME = "tsadv$DicAdditionalEducation";
}
export type DicAdditionalEducationViewName = "_base" | "_local" | "_minimal";
export type DicAdditionalEducationView<
  V extends DicAdditionalEducationViewName
> = V extends "_base"
  ? Pick<
      DicAdditionalEducation,
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
      DicAdditionalEducation,
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
  ? Pick<DicAdditionalEducation, "id" | "langValue">
  : never;
