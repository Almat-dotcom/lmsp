import { AbstractParentEntity } from "./AbstractParentEntity";
import { ControlType } from "./tsadv$ControlType";
import { OccupationalMedicine } from "./tsadv$OccupationalMedicine";
export class SanitaryRegulationsControl extends AbstractParentEntity {
  static NAME = "tsadv$SanitaryRegulationsControl";
  controlType?: ControlType | null;
  totalControl?: any | null;
  identifiedInconsistencies?: any | null;
  eliminatedInconsistencies?: any | null;
  occupationalMedicine?: OccupationalMedicine | null;
}
export type SanitaryRegulationsControlViewName =
  | "_base"
  | "_local"
  | "_minimal"
  | "sanitaryRegulationsControl-view";
export type SanitaryRegulationsControlView<
  V extends SanitaryRegulationsControlViewName
> = V extends "_base"
  ? Pick<
      SanitaryRegulationsControl,
      | "id"
      | "totalControl"
      | "identifiedInconsistencies"
      | "eliminatedInconsistencies"
      | "legacyID"
    >
  : V extends "_local"
  ? Pick<
      SanitaryRegulationsControl,
      | "id"
      | "totalControl"
      | "identifiedInconsistencies"
      | "eliminatedInconsistencies"
      | "legacyID"
    >
  : V extends "sanitaryRegulationsControl-view"
  ? Pick<
      SanitaryRegulationsControl,
      | "id"
      | "controlType"
      | "totalControl"
      | "identifiedInconsistencies"
      | "eliminatedInconsistencies"
    >
  : never;
