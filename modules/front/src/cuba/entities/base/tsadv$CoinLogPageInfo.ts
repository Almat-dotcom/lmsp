import { BaseUuidEntity } from "./sys$BaseUuidEntity";
import { PageInfo } from "./tsadv$PageInfo";
import { CoinLogPojo } from "./tsadv$CoinLogPojo";
export class CoinLogPageInfo extends BaseUuidEntity {
  static NAME = "tsadv$CoinLogPageInfo";
  pageInfo?: PageInfo | null;
  coinLogs?: CoinLogPojo | null;
}
export type CoinLogPageInfoViewName = "_base" | "_local" | "_minimal";
export type CoinLogPageInfoView<V extends CoinLogPageInfoViewName> = never;
