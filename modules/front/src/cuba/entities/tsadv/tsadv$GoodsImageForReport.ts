import { StandardEntity } from "../base/sys$StandardEntity";
import { FileDescriptor } from "../base/sys$FileDescriptor";
export class GoodsImageForReport extends StandardEntity {
  static NAME = "tsadv$GoodsImageForReport";
  good?: any | null;
  primary?: boolean | null;
  image?: FileDescriptor | null;
}
export type GoodsImageForReportViewName = "_base" | "_local" | "_minimal";
export type GoodsImageForReportView<
  V extends GoodsImageForReportViewName
> = V extends "_base"
  ? Pick<GoodsImageForReport, "id" | "primary">
  : V extends "_local"
  ? Pick<GoodsImageForReport, "id" | "primary">
  : never;
