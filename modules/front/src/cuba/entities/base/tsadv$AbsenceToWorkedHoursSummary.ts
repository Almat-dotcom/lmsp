import { AbstractParentEntity } from "./AbstractParentEntity";
import { Absence } from "./tsadv$Absence";
import { WorkedHoursSummary } from "./tsadv$WorkedHoursSummary";
export class AbsenceToWorkedHoursSummary extends AbstractParentEntity {
  static NAME = "tsadv$AbsenceToWorkedHoursSummary";
  absence?: Absence | null;
  workedHoursSummary?: WorkedHoursSummary | null;
}
export type AbsenceToWorkedHoursSummaryViewName =
  | "_base"
  | "_local"
  | "_minimal";
export type AbsenceToWorkedHoursSummaryView<
  V extends AbsenceToWorkedHoursSummaryViewName
> = V extends "_base"
  ? Pick<AbsenceToWorkedHoursSummary, "id" | "legacyID">
  : V extends "_local"
  ? Pick<AbsenceToWorkedHoursSummary, "id" | "legacyID">
  : never;
