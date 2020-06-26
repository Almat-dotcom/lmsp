import { BaseUuidEntity } from "../base/sys$BaseUuidEntity";
export class AssignedTestEnrollment extends BaseUuidEntity {
  static NAME = "tsadv$AssignedTestEnrollment";
  enrollment?: any | null;
  personGroup?: any | null;
  fullName?: string | null;
  organizationNameLang1?: string | null;
  positionNameLang1?: string | null;
  test?: any | null;
  testName?: string | null;
  enrollmentStatus?: number | null;
  success?: boolean | null;
  attempts?: number | null;
  testResult?: number | null;
  courseSection?: any | null;
  course?: any | null;
  sectionName?: string | null;
  organization?: any | null;
  createdBy?: string | null;
}
export type AssignedTestEnrollmentViewName = "_base" | "_local" | "_minimal";
export type AssignedTestEnrollmentView<
  V extends AssignedTestEnrollmentViewName
> = V extends "_base"
  ? Pick<
      AssignedTestEnrollment,
      | "id"
      | "fullName"
      | "testName"
      | "organizationNameLang1"
      | "positionNameLang1"
      | "enrollmentStatus"
      | "success"
      | "attempts"
      | "testResult"
      | "sectionName"
      | "createdBy"
    >
  : V extends "_local"
  ? Pick<
      AssignedTestEnrollment,
      | "id"
      | "fullName"
      | "organizationNameLang1"
      | "positionNameLang1"
      | "testName"
      | "enrollmentStatus"
      | "success"
      | "attempts"
      | "testResult"
      | "sectionName"
      | "createdBy"
    >
  : V extends "_minimal"
  ? Pick<AssignedTestEnrollment, "id" | "fullName" | "testName">
  : never;
