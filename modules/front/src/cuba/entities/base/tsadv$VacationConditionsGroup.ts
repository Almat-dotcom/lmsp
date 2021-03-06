import { AbstractGroup } from "./AbstractGroup";
import { VacationConditions } from "./tsadv$VacationConditions";
export class VacationConditionsGroup extends AbstractGroup {
  static NAME = "tsadv$VacationConditionsGroup";
  list?: VacationConditions[] | null;
  vacationConditions?: VacationConditions | null;
}
export type VacationConditionsGroupViewName = "_base" | "_local" | "_minimal";
export type VacationConditionsGroupView<
  V extends VacationConditionsGroupViewName
> = V extends "_base"
  ? Pick<VacationConditionsGroup, "id" | "legacyID">
  : V extends "_local"
  ? Pick<VacationConditionsGroup, "id" | "legacyID">
  : never;
