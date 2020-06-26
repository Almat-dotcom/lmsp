import { StandardEntity } from "../base/sys$StandardEntity";
export class AbsenceBalanceV extends StandardEntity {
  static NAME = "tsadv$AbsenceBalanceV";
  personGroup?: any | null;
  legacyID?: string | null;
  overallBalanceDays?: number | null;
  dateFrom?: any | null;
  dateTo?: any | null;
  balanceDays?: number | null;
  additionalBalanceDays?: number | null;
  daysSpent?: number | null;
  daysLeft?: number | null;
  extraDaysSpent?: number | null;
  extraDaysLeft?: number | null;
  longAbsenceDays?: number | null;
}
export type AbsenceBalanceVViewName = "_base" | "_local" | "_minimal";
export type AbsenceBalanceVView<
  V extends AbsenceBalanceVViewName
> = V extends "_base"
  ? Pick<
      AbsenceBalanceV,
      | "id"
      | "legacyID"
      | "overallBalanceDays"
      | "dateFrom"
      | "dateTo"
      | "balanceDays"
      | "additionalBalanceDays"
      | "daysSpent"
      | "daysLeft"
      | "extraDaysSpent"
      | "extraDaysLeft"
      | "longAbsenceDays"
    >
  : V extends "_local"
  ? Pick<
      AbsenceBalanceV,
      | "id"
      | "legacyID"
      | "overallBalanceDays"
      | "dateFrom"
      | "dateTo"
      | "balanceDays"
      | "additionalBalanceDays"
      | "daysSpent"
      | "daysLeft"
      | "extraDaysSpent"
      | "extraDaysLeft"
      | "longAbsenceDays"
    >
  : never;
