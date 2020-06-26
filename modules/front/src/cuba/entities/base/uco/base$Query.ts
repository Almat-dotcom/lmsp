import { StandardEntity } from "../sys$StandardEntity";
import { QueryType } from "../../../enums/enums";
export class Query extends StandardEntity {
  static NAME = "base$Query";
  type?: QueryType | null;
  name?: string | null;
  query?: string | null;
}
export type QueryViewName = "_base" | "_local" | "_minimal";
export type QueryView<V extends QueryViewName> = V extends "_base"
  ? Pick<Query, "id" | "name" | "type" | "query">
  : V extends "_local"
  ? Pick<Query, "id" | "type" | "name" | "query">
  : V extends "_minimal"
  ? Pick<Query, "id" | "name">
  : never;
