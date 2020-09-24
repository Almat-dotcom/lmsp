import { AbstractDictionary } from "./AbstractDictionary";
export class DicTroopsStructure extends AbstractDictionary {
  static NAME = "tsadv$DicTroopsStructure";
}
export type DicTroopsStructureViewName = "_base" | "_local" | "_minimal";
export type DicTroopsStructureView<
  V extends DicTroopsStructureViewName
> = V extends "_base"
  ? Pick<
      DicTroopsStructure,
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
      DicTroopsStructure,
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
  ? Pick<DicTroopsStructure, "id" | "langValue">
  : never;
