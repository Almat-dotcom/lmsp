import { StandardEntity } from "../base/sys$StandardEntity";
import { CoinDistributionRule } from "./tsadv$CoinDistributionRule";
export class PersonCoinLog extends StandardEntity {
  static NAME = "tsadv$PersonCoinLog";
  personGroup?: any | null;
  comment?: string | null;
  anotherPersonGroup?: any | null;
  coinType?: string | null;
  actionType?: string | null;
  operationType?: string | null;
  date?: any | null;
  recognition?: any | null;
  goods?: any | null;
  quantity?: any | null;
  coinDistributionRule?: CoinDistributionRule | null;
}
export type PersonCoinLogViewName = "_base" | "_local" | "_minimal";
export type PersonCoinLogView<
  V extends PersonCoinLogViewName
> = V extends "_base"
  ? Pick<
      PersonCoinLog,
      | "id"
      | "comment"
      | "coinType"
      | "actionType"
      | "operationType"
      | "date"
      | "quantity"
    >
  : V extends "_local"
  ? Pick<
      PersonCoinLog,
      | "id"
      | "comment"
      | "coinType"
      | "actionType"
      | "operationType"
      | "date"
      | "quantity"
    >
  : never;
