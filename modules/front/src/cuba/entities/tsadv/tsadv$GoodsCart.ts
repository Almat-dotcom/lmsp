import { StandardEntity } from "../base/sys$StandardEntity";
export class GoodsCart extends StandardEntity {
  static NAME = "tsadv$GoodsCart";
  goods?: any | null;
  issued?: boolean | null;
  personGroup?: any | null;
  quantity?: any | null;
}
export type GoodsCartViewName = "_base" | "_local" | "_minimal";
export type GoodsCartView<V extends GoodsCartViewName> = V extends "_base"
  ? Pick<GoodsCart, "id" | "issued" | "quantity">
  : V extends "_local"
  ? Pick<GoodsCart, "id" | "issued" | "quantity">
  : never;
