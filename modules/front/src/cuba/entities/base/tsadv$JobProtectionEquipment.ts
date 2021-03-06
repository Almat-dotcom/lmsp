import { AbstractParentEntity } from "./AbstractParentEntity";
import { JobGroup } from "./tsadv$JobGroup";
import { DicProtectionEquipment } from "./tsadv$DicProtectionEquipment";
export class JobProtectionEquipment extends AbstractParentEntity {
  static NAME = "tsadv$JobProtectionEquipment";
  jobGroup?: JobGroup | null;
  personalProtectionEquipment?: DicProtectionEquipment | null;
  normPerYear?: number | null;
  startDate?: any | null;
  endDate?: any | null;
}
export type JobProtectionEquipmentViewName =
  | "_base"
  | "_local"
  | "_minimal"
  | "jobProtectionEquipment.edit";
export type JobProtectionEquipmentView<
  V extends JobProtectionEquipmentViewName
> = V extends "_base"
  ? Pick<
      JobProtectionEquipment,
      "id" | "normPerYear" | "startDate" | "endDate" | "legacyID"
    >
  : V extends "_local"
  ? Pick<
      JobProtectionEquipment,
      "id" | "normPerYear" | "startDate" | "endDate" | "legacyID"
    >
  : V extends "jobProtectionEquipment.edit"
  ? Pick<
      JobProtectionEquipment,
      | "id"
      | "normPerYear"
      | "startDate"
      | "endDate"
      | "legacyID"
      | "jobGroup"
      | "personalProtectionEquipment"
    >
  : never;
