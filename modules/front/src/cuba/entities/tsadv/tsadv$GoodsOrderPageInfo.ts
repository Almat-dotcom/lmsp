import { BaseUuidEntity } from "../base/sys$BaseUuidEntity";
import { GoodsOrderPojo } from "./tsadv$GoodsOrderPojo";
export class GoodsOrderPageInfo extends BaseUuidEntity {
  static NAME = "tsadv$GoodsOrderPageInfo";
  pageInfo?: any | null;
  goodsOrders?: GoodsOrderPojo | null;
}
export type GoodsOrderPageInfoViewName = "_base" | "_local" | "_minimal";
export type GoodsOrderPageInfoView<
  V extends GoodsOrderPageInfoViewName
> = never;
