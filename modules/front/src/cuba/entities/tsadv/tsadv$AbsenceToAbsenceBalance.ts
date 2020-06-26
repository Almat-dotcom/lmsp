import { StandardEntity } from "../base/sys$StandardEntity";
export class AbsenceToAbsenceBalance extends StandardEntity {
  static NAME = "tsadv$AbsenceToAbsenceBalance";
  absence?: any | null;
  additionalAbsenceDays?: number | null;
  absenceBalance?: any | null;
  absenceDays?: number | null;
}
export type AbsenceToAbsenceBalanceViewName = "_base" | "_local" | "_minimal";
export type AbsenceToAbsenceBalanceView<
  V extends AbsenceToAbsenceBalanceViewName
> = V extends "_base"
  ? Pick<
      AbsenceToAbsenceBalance,
      "id" | "additionalAbsenceDays" | "absenceDays"
    >
  : V extends "_local"
  ? Pick<
      AbsenceToAbsenceBalance,
      "id" | "additionalAbsenceDays" | "absenceDays"
    >
  : never;
