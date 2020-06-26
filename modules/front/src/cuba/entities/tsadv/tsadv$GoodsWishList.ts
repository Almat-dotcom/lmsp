import { StandardEntity } from "../base/sys$StandardEntity";
export class GoodsWishList extends StandardEntity {
  static NAME = "tsadv$GoodsWishList";
  personGroup?: any | null;
  goods?: any | null;
}
export type GoodsWishListViewName = "_base" | "_local" | "_minimal";
export type GoodsWishListView<V extends GoodsWishListViewName> = never;
