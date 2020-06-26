import { BaseUuidEntity } from "../base/sys$BaseUuidEntity";
import { CoinLogPojo } from "./tsadv$CoinLogPojo";
export class CoinLogPageInfo extends BaseUuidEntity {
  static NAME = "tsadv$CoinLogPageInfo";
  pageInfo?: any | null;
  coinLogs?: CoinLogPojo | null;
}
export type CoinLogPageInfoViewName = "_base" | "_local" | "_minimal";
export type CoinLogPageInfoView<V extends CoinLogPageInfoViewName> = never;
