import { StandardEntity } from "../base/sys$StandardEntity";
import { Internship } from "./tsadv$Internship";
export class InternshipExpenses extends StandardEntity {
  static NAME = "tsadv$InternshipExpenses";
  internship?: Internship | null;
  expenseType?: any | null;
  amount?: any | null;
  currency?: any | null;
}
export type InternshipExpensesViewName = "_base" | "_local" | "_minimal";
export type InternshipExpensesView<
  V extends InternshipExpensesViewName
> = V extends "_base"
  ? Pick<InternshipExpenses, "id" | "amount">
  : V extends "_local"
  ? Pick<InternshipExpenses, "id" | "amount">
  : never;
