import { AbstractDictionary } from "./AbstractDictionary";
export class RisksViolations extends AbstractDictionary {
  static NAME = "tsadv$RisksViolations";
}
export type RisksViolationsViewName = "_base" | "_local" | "_minimal";
export type RisksViolationsView<
  V extends RisksViolationsViewName
> = V extends "_base"
  ? Pick<
      RisksViolations,
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
      RisksViolations,
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
  ? Pick<RisksViolations, "id" | "langValue">
  : never;
