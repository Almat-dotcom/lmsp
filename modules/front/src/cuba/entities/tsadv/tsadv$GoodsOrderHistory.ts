import { StandardEntity } from "../base/sys$StandardEntity";
import { GoodsOrder } from "./tsadv$GoodsOrder";
export class GoodsOrderHistory extends StandardEntity {
  static NAME = "tsadv$GoodsOrderHistory";
  goodsOrder?: GoodsOrder | null;
  status?: string | null;
  dateTime?: any | null;
  personGroup?: any | null;
}
export type GoodsOrderHistoryViewName = "_base" | "_local" | "_minimal";
export type GoodsOrderHistoryView<
  V extends GoodsOrderHistoryViewName
> = V extends "_base"
  ? Pick<GoodsOrderHistory, "id" | "status" | "dateTime">
  : V extends "_local"
  ? Pick<GoodsOrderHistory, "id" | "status" | "dateTime">
  : never;
