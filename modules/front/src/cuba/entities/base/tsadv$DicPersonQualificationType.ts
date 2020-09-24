import { AbstractDictionary } from "./AbstractDictionary";
export class DicPersonQualificationType extends AbstractDictionary {
  static NAME = "tsadv$DicPersonQualificationType";
}
export type DicPersonQualificationTypeViewName =
  | "_base"
  | "_local"
  | "_minimal";
export type DicPersonQualificationTypeView<
  V extends DicPersonQualificationTypeViewName
> = V extends "_base"
  ? Pick<
      DicPersonQualificationType,
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
      DicPersonQualificationType,
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
  ? Pick<DicPersonQualificationType, "id" | "langValue">
  : never;
