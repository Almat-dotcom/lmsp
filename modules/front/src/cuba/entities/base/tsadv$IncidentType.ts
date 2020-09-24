import { AbstractDictionary } from "./AbstractDictionary";
export class IncidentType extends AbstractDictionary {
  static NAME = "tsadv$IncidentType";
}
export type IncidentTypeViewName = "_base" | "_local" | "_minimal";
export type IncidentTypeView<V extends IncidentTypeViewName> = V extends "_base"
  ? Pick<
      IncidentType,
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
      IncidentType,
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
  ? Pick<IncidentType, "id" | "langValue">
  : never;
