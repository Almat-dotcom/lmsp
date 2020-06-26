import { StandardEntity } from "../base/sys$StandardEntity";
import { FileDescriptor } from "../base/sys$FileDescriptor";
export class Banner extends StandardEntity {
  static NAME = "tsadv$Banner";
  page?: string | null;
  imageLang1?: FileDescriptor | null;
  imageLang2?: FileDescriptor | null;
  imageLang3?: FileDescriptor | null;
  active?: boolean | null;
}
export type BannerViewName = "_base" | "_local" | "_minimal";
export type BannerView<V extends BannerViewName> = V extends "_base"
  ? Pick<Banner, "id" | "page" | "active">
  : V extends "_local"
  ? Pick<Banner, "id" | "page" | "active">
  : never;
