import { BaseUuidEntity } from "../base/sys$BaseUuidEntity";
export class NotPersistEntity extends BaseUuidEntity {
  static NAME = "tsadv$NotPersistEntity";
  assignmentId?: any | null;
  person?: any | null;
  position?: any | null;
  assessment?: any | null;
  direct?: any | null;
  total?: any | null;
  amount?: number | null;
  currency?: any | null;
}
export type NotPersistEntityViewName = "_base" | "_local" | "_minimal";
export type NotPersistEntityView<V extends NotPersistEntityViewName> = never;
