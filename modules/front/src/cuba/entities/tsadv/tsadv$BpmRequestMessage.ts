import { StandardEntity } from "../base/sys$StandardEntity";
export class BpmRequestMessage extends StandardEntity {
  static NAME = "tsadv$BpmRequestMessage";
  entityName?: string | null;
  entityId?: any | null;
  entityRequestNumber?: any | null;
  sendDate?: any | null;
  message?: string | null;
  assignedUser?: any | null;
  assignedBy?: any | null;
  parent?: BpmRequestMessage | null;
  lvl?: number | null;
  screenName?: string | null;
  procInstance?: any | null;
  activity?: any | null;
}
export type BpmRequestMessageViewName = "_base" | "_local" | "_minimal";
export type BpmRequestMessageView<
  V extends BpmRequestMessageViewName
> = V extends "_base"
  ? Pick<
      BpmRequestMessage,
      | "id"
      | "entityName"
      | "entityId"
      | "entityRequestNumber"
      | "sendDate"
      | "message"
      | "lvl"
      | "screenName"
    >
  : V extends "_local"
  ? Pick<
      BpmRequestMessage,
      | "id"
      | "entityName"
      | "entityId"
      | "entityRequestNumber"
      | "sendDate"
      | "message"
      | "lvl"
      | "screenName"
    >
  : never;
