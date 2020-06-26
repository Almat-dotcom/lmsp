import { StandardEntity } from "../base/sys$StandardEntity";
export class PersonMentor extends StandardEntity {
  static NAME = "tsadv$PersonMentor";
  personGroup?: any | null;
  mentor?: any | null;
  startDate?: any | null;
  endDate?: any | null;
  organizationGroup?: any | null;
}
export type PersonMentorViewName = "_base" | "_local" | "_minimal";
export type PersonMentorView<V extends PersonMentorViewName> = V extends "_base"
  ? Pick<PersonMentor, "id" | "startDate" | "endDate">
  : V extends "_local"
  ? Pick<PersonMentor, "id" | "startDate" | "endDate">
  : never;
