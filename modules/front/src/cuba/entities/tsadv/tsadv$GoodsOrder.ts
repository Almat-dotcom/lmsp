import { StandardEntity } from "../base/sys$StandardEntity";
import { GoodsOrderHistory } from "./tsadv$GoodsOrderHistory";
import { GoodsOrderDetail } from "./tsadv$GoodsOrderDetail";
export class GoodsOrder extends StandardEntity {
  static NAME = "tsadv$GoodsOrder";
  status?: string | null;
  deliveryAddress?: any | null;
  discount?: number | null;
  histories?: GoodsOrderHistory[] | null;
  totalSum?: any | null;
  orderNumber?: string | null;
  orderDate?: any | null;
  personGroup?: any | null;
  details?: GoodsOrderDetail[] | null;
}
export type GoodsOrderViewName = "_base" | "_local" | "_minimal";
export type GoodsOrderView<V extends GoodsOrderViewName> = V extends "_base"
  ? Pick<
      GoodsOrder,
      "id" | "orderNumber" | "status" | "discount" | "totalSum" | "orderDate"
    >
  : V extends "_local"
  ? Pick<
      GoodsOrder,
      "id" | "status" | "discount" | "totalSum" | "orderNumber" | "orderDate"
    >
  : V extends "_minimal"
  ? Pick<GoodsOrder, "id" | "orderNumber">
  : never;
