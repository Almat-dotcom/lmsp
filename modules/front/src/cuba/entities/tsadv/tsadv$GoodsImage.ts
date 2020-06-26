import { StandardEntity } from "../base/sys$StandardEntity";
import { FileDescriptor } from "../base/sys$FileDescriptor";
export class GoodsImage extends StandardEntity {
  static NAME = "tsadv$GoodsImage";
  good?: any | null;
  primary?: boolean | null;
  image?: FileDescriptor | null;
}
export type GoodsImageViewName = "_base" | "_local" | "_minimal";
export type GoodsImageView<V extends GoodsImageViewName> = V extends "_base"
  ? Pick<GoodsImage, "id" | "primary">
  : V extends "_local"
  ? Pick<GoodsImage, "id" | "primary">
  : never;
