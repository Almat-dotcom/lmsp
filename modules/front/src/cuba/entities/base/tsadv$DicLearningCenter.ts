import { AbstractDictionary } from "./AbstractDictionary";
export class DicLearningCenter extends AbstractDictionary {
  static NAME = "tsadv$DicLearningCenter";
  address?: string | null;
  latitude?: any | null;
  longitude?: any | null;
}
export type DicLearningCenterViewName = "_base" | "_local" | "_minimal";
export type DicLearningCenterView<
  V extends DicLearningCenterViewName
> = V extends "_base"
  ? Pick<
      DicLearningCenter,
      | "id"
      | "langValue"
      | "address"
      | "latitude"
      | "longitude"
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
      DicLearningCenter,
      | "id"
      | "address"
      | "latitude"
      | "longitude"
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
  ? Pick<DicLearningCenter, "id" | "langValue">
  : never;
