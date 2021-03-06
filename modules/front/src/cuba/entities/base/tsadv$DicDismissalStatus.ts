import { AbstractDictionary } from "./AbstractDictionary";
export class DicDismissalStatus extends AbstractDictionary {
  static NAME = "tsadv$DicDismissalStatus";
}
export type DicDismissalStatusViewName = "_base" | "_local" | "_minimal";
export type DicDismissalStatusView<
  V extends DicDismissalStatusViewName
> = V extends "_base"
  ? Pick<
      DicDismissalStatus,
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
      DicDismissalStatus,
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
  ? Pick<DicDismissalStatus, "id" | "langValue">
  : never;
