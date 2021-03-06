import { AbstractDictionary } from "./AbstractDictionary";
export class DicRequisitionAccessLevel extends AbstractDictionary {
  static NAME = "tsadv$DicRequisitionAccessLevel";
}
export type DicRequisitionAccessLevelViewName = "_base" | "_local" | "_minimal";
export type DicRequisitionAccessLevelView<
  V extends DicRequisitionAccessLevelViewName
> = V extends "_base"
  ? Pick<
      DicRequisitionAccessLevel,
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
      DicRequisitionAccessLevel,
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
  ? Pick<DicRequisitionAccessLevel, "id" | "langValue">
  : never;
