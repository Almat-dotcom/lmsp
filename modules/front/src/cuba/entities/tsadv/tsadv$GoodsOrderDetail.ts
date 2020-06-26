import { StandardEntity } from "../base/sys$StandardEntity";
import { GoodsOrder } from "./tsadv$GoodsOrder";
import { FileDescriptor } from "../base/sys$FileDescriptor";
export class GoodsOrderDetail extends StandardEntity {
  static NAME = "tsadv$GoodsOrderDetail";
  goods?: any | null;
  comment?: string | null;
  excluded?: boolean | null;
  quantity?: any | null;
  goodsOrder?: GoodsOrder | null;
  voucherUsed?: boolean | null;
  qrCode?: string | null;
  qrCodeImg?: FileDescriptor | null;
}
export type GoodsOrderDetailViewName = "_base" | "_local" | "_minimal";
export type GoodsOrderDetailView<
  V extends GoodsOrderDetailViewName
> = V extends "_base"
  ? Pick<
      GoodsOrderDetail,
      "id" | "comment" | "excluded" | "quantity" | "voucherUsed" | "qrCode"
    >
  : V extends "_local"
  ? Pick<
      GoodsOrderDetail,
      "id" | "comment" | "excluded" | "quantity" | "voucherUsed" | "qrCode"
    >
  : never;
