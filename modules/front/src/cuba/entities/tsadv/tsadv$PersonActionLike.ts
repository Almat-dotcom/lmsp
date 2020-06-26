import { StandardEntity } from "../base/sys$StandardEntity";
import { PersonAction } from "./tsadv$PersonAction";
export class PersonActionLike extends StandardEntity {
  static NAME = "tsadv$PersonActionLike";
  action?: PersonAction | null;
  likeType?: any | null;
  personGroup?: any | null;
}
export type PersonActionLikeViewName = "_base" | "_local" | "_minimal";
export type PersonActionLikeView<V extends PersonActionLikeViewName> = never;
