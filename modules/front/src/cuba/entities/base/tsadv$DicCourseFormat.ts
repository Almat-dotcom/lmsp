import { AbstractDictionary } from "./AbstractDictionary";
export class DicCourseFormat extends AbstractDictionary {
  static NAME = "tsadv$DicCourseFormat";
}
export type DicCourseFormatViewName = "_base" | "_local" | "_minimal";
export type DicCourseFormatView<
  V extends DicCourseFormatViewName
> = V extends "_base"
  ? Pick<
      DicCourseFormat,
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
      DicCourseFormat,
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
  ? Pick<DicCourseFormat, "id" | "langValue">
  : never;
