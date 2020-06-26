import { StandardEntity } from "../base/sys$StandardEntity";
import { FileDescriptor } from "../base/sys$FileDescriptor";
export class ImportLearningLog extends StandardEntity {
  static NAME = "tsadv$ImportLearningLog";
  processed?: number | null;
  loadingDate?: any | null;
  success?: boolean | null;
  file?: FileDescriptor | null;
  errorMessage?: string | null;
}
export type ImportLearningLogViewName = "_base" | "_local" | "_minimal";
export type ImportLearningLogView<
  V extends ImportLearningLogViewName
> = V extends "_base"
  ? Pick<
      ImportLearningLog,
      "id" | "processed" | "loadingDate" | "success" | "errorMessage"
    >
  : V extends "_local"
  ? Pick<
      ImportLearningLog,
      "id" | "processed" | "loadingDate" | "success" | "errorMessage"
    >
  : never;
