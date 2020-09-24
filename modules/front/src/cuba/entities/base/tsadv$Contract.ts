import { AbstractParentEntity } from "./AbstractParentEntity";
import { ContractGroup } from "./tsadv$ContractGroup";
export class Contract extends AbstractParentEntity {
  static NAME = "tsadv$Contract";
  group?: ContractGroup | null;
}
export type ContractViewName = "_base" | "_local" | "_minimal";
export type ContractView<V extends ContractViewName> = V extends "_base"
  ? Pick<Contract, "id" | "legacyID">
  : V extends "_local"
  ? Pick<Contract, "id" | "legacyID">
  : V extends "_minimal"
  ? Pick<Contract, "id">
  : never;
