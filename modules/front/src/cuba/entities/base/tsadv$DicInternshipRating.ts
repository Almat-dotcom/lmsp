import { AbstractDictionary } from "./AbstractDictionary";
export class DicInternshipRating extends AbstractDictionary {
  static NAME = "tsadv$DicInternshipRating";
}
export type DicInternshipRatingViewName = "_base" | "_local" | "_minimal";
export type DicInternshipRatingView<
  V extends DicInternshipRatingViewName
> = V extends "_base"
  ? Pick<
      DicInternshipRating,
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
      DicInternshipRating,
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
  ? Pick<DicInternshipRating, "id" | "langValue">
  : never;
