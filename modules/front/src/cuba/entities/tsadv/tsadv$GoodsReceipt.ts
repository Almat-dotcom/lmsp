import { StandardEntity } from "../base/sys$StandardEntity";
export class GoodsReceipt extends StandardEntity {
  static NAME = "tsadv$GoodsReceipt";
  goods?: any | null;
  quantity?: any | null;
}
export type GoodsReceiptViewName = "_base" | "_local" | "_minimal";
export type GoodsReceiptView<V extends GoodsReceiptViewName> = V extends "_base"
  ? Pick<GoodsReceipt, "id" | "quantity">
  : V extends "_local"
  ? Pick<GoodsReceipt, "id" | "quantity">
  : never;
