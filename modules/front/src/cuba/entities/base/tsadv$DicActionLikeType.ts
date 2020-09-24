import { AbstractDictionary } from "./AbstractDictionary";
export class DicActionLikeType extends AbstractDictionary {
  static NAME = "tsadv$DicActionLikeType";
}
export type DicActionLikeTypeViewName = "_base" | "_local" | "_minimal";
export type DicActionLikeTypeView<
  V extends DicActionLikeTypeViewName
> = V extends "_base"
  ? Pick<
      DicActionLikeType,
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
      DicActionLikeType,
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
  ? Pick<DicActionLikeType, "id" | "langValue">
  : never;
