import { AbstractDictionary } from "./AbstractDictionary";
export class DicNineBoxLevel extends AbstractDictionary {
  static NAME = "tsadv$DicNineBoxLevel";
}
export type DicNineBoxLevelViewName = "_base" | "_local" | "_minimal";
export type DicNineBoxLevelView<
  V extends DicNineBoxLevelViewName
> = V extends "_base"
  ? Pick<
      DicNineBoxLevel,
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
      DicNineBoxLevel,
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
  ? Pick<DicNineBoxLevel, "id" | "langValue">
  : never;
