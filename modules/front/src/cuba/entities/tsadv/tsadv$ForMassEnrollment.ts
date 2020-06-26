import { BaseUuidEntity } from "../base/sys$BaseUuidEntity";
import { Course } from "./tsadv$Course";
export class ForMassEnrollment extends BaseUuidEntity {
  static NAME = "tsadv$ForMassEnrollment";
  course?: Course | null;
  organization?: any | null;
  check?: boolean | null;
  position?: any | null;
  job?: any | null;
}
export type ForMassEnrollmentViewName = "_base" | "_local" | "_minimal";
export type ForMassEnrollmentView<V extends ForMassEnrollmentViewName> = never;
