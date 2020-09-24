import { AbstractDictionary } from "./AbstractDictionary";
export class InvestigationConducted extends AbstractDictionary {
  static NAME = "tsadv$InvestigationConducted";
}
export type InvestigationConductedViewName = "_base" | "_local" | "_minimal";
export type InvestigationConductedView<
  V extends InvestigationConductedViewName
> = V extends "_base"
  ? Pick<
      InvestigationConducted,
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
      InvestigationConducted,
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
  ? Pick<InvestigationConducted, "id" | "langValue">
  : never;
