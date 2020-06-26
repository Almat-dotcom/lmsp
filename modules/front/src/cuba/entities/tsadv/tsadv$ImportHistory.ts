import { StandardEntity } from "../base/sys$StandardEntity";
import { FileDescriptor } from "../base/sys$FileDescriptor";
import { ImportHistoryLog } from "./tsadv$ImportHistoryLog";
export class ImportHistory extends StandardEntity {
  static NAME = "tsadv$ImportHistory";
  file?: FileDescriptor | null;
  importScenario?: any | null;
  records?: ImportHistoryLog[] | null;
  started?: any | null;
  finished?: any | null;
}
export type ImportHistoryViewName = "_base" | "_local" | "_minimal";
export type ImportHistoryView<
  V extends ImportHistoryViewName
> = V extends "_base"
  ? Pick<ImportHistory, "id" | "started" | "finished">
  : V extends "_local"
  ? Pick<ImportHistory, "id" | "started" | "finished">
  : never;
