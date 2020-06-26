import { BaseUuidEntity } from "../base/sys$BaseUuidEntity";
export class BudgetRequestItemsRowDto extends BaseUuidEntity {
  static NAME = "tsadv$BudgetDto";
  name?: string | null;
  list?: any | null;
  dicCostType?: any | null;
}
export type BudgetRequestItemsRowDtoViewName = "_base" | "_local" | "_minimal";
export type BudgetRequestItemsRowDtoView<
  V extends BudgetRequestItemsRowDtoViewName
> = never;
