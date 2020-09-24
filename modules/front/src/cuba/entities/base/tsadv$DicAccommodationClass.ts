import { AbstractDictionary } from "./AbstractDictionary";
import { DicAccommodationType } from "./tsadv$DicAccommodationType";
export class DicAccommodationClass extends AbstractDictionary {
  static NAME = "tsadv$DicAccommodationClass";
  dicAccommodationType?: DicAccommodationType | null;
}
export type DicAccommodationClassViewName =
  | "_base"
  | "_local"
  | "_minimal"
  | "dicAccommodationClass.all";
export type DicAccommodationClassView<
  V extends DicAccommodationClassViewName
> = V extends "_base"
  ? Pick<
      DicAccommodationClass,
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
      DicAccommodationClass,
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
  ? Pick<DicAccommodationClass, "id" | "langValue">
  : V extends "dicAccommodationClass.all"
  ? Pick<
      DicAccommodationClass,
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
      | "dicAccommodationType"
    >
  : never;
