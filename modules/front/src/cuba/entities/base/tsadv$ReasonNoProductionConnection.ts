import { AbstractDictionary } from "./AbstractDictionary";
export class ReasonNoProductionConnection extends AbstractDictionary {
  static NAME = "tsadv$ReasonNoProductionConnection";
}
export type ReasonNoProductionConnectionViewName =
  | "_base"
  | "_local"
  | "_minimal";
export type ReasonNoProductionConnectionView<
  V extends ReasonNoProductionConnectionViewName
> = V extends "_base"
  ? Pick<
      ReasonNoProductionConnection,
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
      ReasonNoProductionConnection,
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
  ? Pick<ReasonNoProductionConnection, "id" | "langValue">
  : never;
