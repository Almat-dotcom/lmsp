import { StandardEntity } from "../base/sys$StandardEntity";
export class HealthDeteriorationWitnesses extends StandardEntity {
  static NAME = "tsadv$HealthDeteriorationWitnesses";
  person?: any | null;
  healthDeterioration?: any | null;
}
export type HealthDeteriorationWitnessesViewName =
  | "_base"
  | "_local"
  | "_minimal";
export type HealthDeteriorationWitnessesView<
  V extends HealthDeteriorationWitnessesViewName
> = never;
