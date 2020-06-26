import { StandardEntity } from "../base/sys$StandardEntity";
import { FileDescriptor } from "../base/sys$FileDescriptor";
export class AgreementDocument extends StandardEntity {
  static NAME = "tsadv$AgreementDocument";
  file?: FileDescriptor | null;
  description?: string | null;
  agreement?: any | null;
}
export type AgreementDocumentViewName = "_base" | "_local" | "_minimal";
export type AgreementDocumentView<
  V extends AgreementDocumentViewName
> = V extends "_base"
  ? Pick<AgreementDocument, "id" | "description">
  : V extends "_local"
  ? Pick<AgreementDocument, "id" | "description">
  : never;
