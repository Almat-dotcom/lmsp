import { AbstractParentEntity } from "./AbstractParentEntity";
import { BudgetHeader } from "./tsadv$BudgetHeader";
import { PersonGroupExt } from "./base$PersonGroupExt";
export class BudgetHeaderHistory extends AbstractParentEntity {
  static NAME = "tsadv$BudgetHeaderHistory";
  budgetHeader?: BudgetHeader | null;
  budgetHeaderStatus?: any | null;
  changePerson?: PersonGroupExt | null;
  comment?: string | null;
}
export type BudgetHeaderHistoryViewName =
  | "_base"
  | "_local"
  | "_minimal"
  | "budgetHeaderHistory-view";
export type BudgetHeaderHistoryView<
  V extends BudgetHeaderHistoryViewName
> = V extends "_base"
  ? Pick<
      BudgetHeaderHistory,
      "id" | "budgetHeaderStatus" | "comment" | "legacyID"
    >
  : V extends "_local"
  ? Pick<
      BudgetHeaderHistory,
      "id" | "budgetHeaderStatus" | "comment" | "legacyID"
    >
  : V extends "budgetHeaderHistory-view"
  ? Pick<
      BudgetHeaderHistory,
      | "id"
      | "budgetHeaderStatus"
      | "comment"
      | "legacyID"
      | "budgetHeader"
      | "changePerson"
      | "updateTs"
    >
  : never;
