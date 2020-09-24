import { StandardEntity } from "./sys$StandardEntity";
import { UserExtPersonGroup } from "./tsadv$UserExtPersonGroup";
import { ProcInstance } from "./bpm$ProcInstance";
import { Activity } from "./uactivity$Activity";
export class BpmRequestMessage extends StandardEntity {
  static NAME = "tsadv$BpmRequestMessage";
  entityName?: string | null;
  entityId?: any | null;
  entityRequestNumber?: any | null;
  sendDate?: any | null;
  message?: string | null;
  assignedUser?: UserExtPersonGroup | null;
  assignedBy?: UserExtPersonGroup | null;
  parent?: BpmRequestMessage | null;
  lvl?: number | null;
  screenName?: string | null;
  procInstance?: ProcInstance | null;
  activity?: Activity | null;
}
export type BpmRequestMessageViewName =
  | "_base"
  | "_local"
  | "_minimal"
  | "bpmRequestMessage-view";
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
  : V extends "bpmRequestMessage-view"
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
      | "assignedUser"
      | "assignedBy"
      | "parent"
      | "procInstance"
      | "activity"
    >
  : never;
