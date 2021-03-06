import { AbstractParentEntity } from "./AbstractParentEntity";
import { PersonGroupExt } from "./base$PersonGroupExt";
export class PersonExperience extends AbstractParentEntity {
  static NAME = "tsadv$PersonExperience";
  personGroup?: PersonGroupExt | null;
  untilNow?: boolean | null;
  company?: string | null;
  job?: string | null;
  startMonth?: any | null;
  endMonth?: any | null;
  description?: string | null;
}
export type PersonExperienceViewName =
  | "_base"
  | "_local"
  | "_minimal"
  | "personExperience.full"
  | "personExperience.view";
export type PersonExperienceView<
  V extends PersonExperienceViewName
> = V extends "_base"
  ? Pick<
      PersonExperience,
      | "id"
      | "company"
      | "startMonth"
      | "endMonth"
      | "untilNow"
      | "job"
      | "description"
      | "legacyID"
    >
  : V extends "_local"
  ? Pick<
      PersonExperience,
      | "id"
      | "untilNow"
      | "company"
      | "job"
      | "startMonth"
      | "endMonth"
      | "description"
      | "legacyID"
    >
  : V extends "_minimal"
  ? Pick<PersonExperience, "id" | "company" | "startMonth" | "endMonth">
  : V extends "personExperience.full"
  ? Pick<
      PersonExperience,
      | "id"
      | "untilNow"
      | "company"
      | "job"
      | "startMonth"
      | "endMonth"
      | "description"
      | "legacyID"
      | "personGroup"
    >
  : V extends "personExperience.view"
  ? Pick<
      PersonExperience,
      | "id"
      | "untilNow"
      | "company"
      | "job"
      | "startMonth"
      | "endMonth"
      | "description"
      | "legacyID"
      | "personGroup"
    >
  : never;
