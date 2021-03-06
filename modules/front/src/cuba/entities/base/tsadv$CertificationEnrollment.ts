import { AbstractParentEntity } from "./AbstractParentEntity";
import { PersonGroupExt } from "./base$PersonGroupExt";
import { Certification } from "./tsadv$Certification";
export class CertificationEnrollment extends AbstractParentEntity {
  static NAME = "tsadv$CertificationEnrollment";
  personGroup?: PersonGroupExt | null;
  startDate?: any | null;
  nextDate?: any | null;
  certification?: Certification | null;
  status?: any | null;
}
export type CertificationEnrollmentViewName =
  | "_base"
  | "_local"
  | "_minimal"
  | "certificationEnrollment.browse"
  | "certificationEnrollment.edit"
  | "certificationEnrollment.schedule"
  | "certificationEnrollment.ss.browse";
export type CertificationEnrollmentView<
  V extends CertificationEnrollmentViewName
> = V extends "_base"
  ? Pick<
      CertificationEnrollment,
      "id" | "startDate" | "nextDate" | "status" | "legacyID"
    >
  : V extends "_local"
  ? Pick<
      CertificationEnrollment,
      "id" | "startDate" | "nextDate" | "status" | "legacyID"
    >
  : V extends "certificationEnrollment.browse"
  ? Pick<
      CertificationEnrollment,
      | "id"
      | "personGroup"
      | "startDate"
      | "nextDate"
      | "certification"
      | "status"
    >
  : V extends "certificationEnrollment.edit"
  ? Pick<
      CertificationEnrollment,
      | "id"
      | "personGroup"
      | "startDate"
      | "nextDate"
      | "certification"
      | "status"
    >
  : V extends "certificationEnrollment.schedule"
  ? Pick<
      CertificationEnrollment,
      | "id"
      | "personGroup"
      | "startDate"
      | "nextDate"
      | "certification"
      | "status"
    >
  : V extends "certificationEnrollment.ss.browse"
  ? Pick<
      CertificationEnrollment,
      | "id"
      | "personGroup"
      | "startDate"
      | "nextDate"
      | "certification"
      | "status"
    >
  : never;
