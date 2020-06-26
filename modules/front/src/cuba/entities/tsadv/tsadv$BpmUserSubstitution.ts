import { StandardEntity } from "../base/sys$StandardEntity";
export class BpmUserSubstitution extends StandardEntity {
  static NAME = "tsadv$BpmUserSubstitution";
  substitutedUser?: any | null;
  user?: any | null;
  startDate?: any | null;
  endDate?: any | null;
}
export type BpmUserSubstitutionViewName = "_base" | "_local" | "_minimal";
export type BpmUserSubstitutionView<
  V extends BpmUserSubstitutionViewName
> = V extends "_base"
  ? Pick<BpmUserSubstitution, "id" | "startDate" | "endDate">
  : V extends "_local"
  ? Pick<BpmUserSubstitution, "id" | "startDate" | "endDate">
  : never;
