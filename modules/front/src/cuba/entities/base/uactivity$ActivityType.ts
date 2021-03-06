import { AbstractDictionary } from "./AbstractDictionary";
import { WindowProperty } from "./uactivity$WindowProperty";
export class ActivityType extends AbstractDictionary {
  static NAME = "uactivity$ActivityType";
  screen?: string | null;
  windowProperty?: WindowProperty | null;
}
export type ActivityTypeViewName =
  | "_base"
  | "_local"
  | "_minimal"
  | "activityType.edit";
export type ActivityTypeView<V extends ActivityTypeViewName> = V extends "_base"
  ? Pick<
      ActivityType,
      | "id"
      | "langValue"
      | "screen"
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
      ActivityType,
      | "id"
      | "screen"
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
  ? Pick<ActivityType, "id" | "langValue">
  : V extends "activityType.edit"
  ? Pick<
      ActivityType,
      | "id"
      | "screen"
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
      | "windowProperty"
    >
  : never;
