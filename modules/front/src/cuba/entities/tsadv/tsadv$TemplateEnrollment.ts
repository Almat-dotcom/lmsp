import { BaseUuidEntity } from "../base/sys$BaseUuidEntity";
export class TemplateEnrollment extends BaseUuidEntity {
  static NAME = "tsadv$TemplateEnrollment";
  status?: number | null;
  date?: any | null;
  reason?: string | null;
}
export type TemplateEnrollmentViewName = "_base" | "_local" | "_minimal";
export type TemplateEnrollmentView<
  V extends TemplateEnrollmentViewName
> = never;
