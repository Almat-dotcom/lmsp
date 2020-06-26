import { StandardEntity } from "../base/sys$StandardEntity";
import { PersonAction } from "./tsadv$PersonAction";
import { FileDescriptor } from "../base/sys$FileDescriptor";
export class PersonActionObject extends StandardEntity {
  static NAME = "tsadv$PersonActionObject";
  action?: PersonAction | null;
  object?: FileDescriptor | null;
}
export type PersonActionObjectViewName = "_base" | "_local" | "_minimal";
export type PersonActionObjectView<
  V extends PersonActionObjectViewName
> = never;
