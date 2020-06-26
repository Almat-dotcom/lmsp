import { BaseUuidEntity } from "../base/sys$BaseUuidEntity";
import { GoodsPojo } from "./tsadv$GoodsPojo";
export class GoodsPageInfo extends BaseUuidEntity {
  static NAME = "tsadv$GoodsPageInfo";
  pageInfo?: any | null;
  goods?: GoodsPojo | null;
}
export type GoodsPageInfoViewName = "_base" | "_local" | "_minimal";
export type GoodsPageInfoView<V extends GoodsPageInfoViewName> = never;
