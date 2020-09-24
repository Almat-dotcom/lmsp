import { AbstractDictionary } from "./AbstractDictionary";
export class DicEducationDegree extends AbstractDictionary {
  static NAME = "tsadv$DicEducationDegree";
}
export type DicEducationDegreeViewName = "_base" | "_local" | "_minimal";
export type DicEducationDegreeView<
  V extends DicEducationDegreeViewName
> = V extends "_base"
  ? Pick<
      DicEducationDegree,
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
      DicEducationDegree,
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
  ? Pick<DicEducationDegree, "id" | "langValue">
  : never;
