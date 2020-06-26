import { StandardEntity } from "../sys$StandardEntity";
export class InteractionLog extends StandardEntity {
  static NAME = "base$InteractionLog";
  action?: string | null;
  description?: string | null;
  status?: string | null;
  statusText?: string | null;
}
export type InteractionLogViewName = "_base" | "_local" | "_minimal";
export type InteractionLogView<
  V extends InteractionLogViewName
> = V extends "_base"
  ? Pick<
      InteractionLog,
      "id" | "action" | "createTs" | "description" | "status" | "statusText"
    >
  : V extends "_local"
  ? Pick<
      InteractionLog,
      "id" | "action" | "description" | "status" | "statusText"
    >
  : V extends "_minimal"
  ? Pick<InteractionLog, "id" | "action" | "createTs">
  : never;
