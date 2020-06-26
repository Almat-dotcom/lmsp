import { StandardEntity } from "../sys$StandardEntity";
import { FiscalPeriod } from "./base$FiscalPeriod";
export class FiscalYear extends StandardEntity {
  static NAME = "base$FiscalYear";
  name?: string | null;
  startDate?: any | null;
  endDate?: any | null;
  periods?: FiscalPeriod[] | null;
}
export type FiscalYearViewName = "_base" | "_local" | "_minimal";
export type FiscalYearView<V extends FiscalYearViewName> = V extends "_base"
  ? Pick<FiscalYear, "id" | "name" | "startDate" | "endDate">
  : V extends "_local"
  ? Pick<FiscalYear, "id" | "name" | "startDate" | "endDate">
  : V extends "_minimal"
  ? Pick<FiscalYear, "id" | "name">
  : never;
