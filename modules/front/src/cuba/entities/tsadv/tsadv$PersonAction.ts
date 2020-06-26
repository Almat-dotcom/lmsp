import { StandardEntity } from "../base/sys$StandardEntity";
import { PersonActionObject } from "./tsadv$PersonActionObject";
import { PersonActionLike } from "./tsadv$PersonActionLike";
export class PersonAction extends StandardEntity {
  static NAME = "tsadv$PersonAction";
  actionLang1?: string | null;
  author?: any | null;
  receiver?: any | null;
  actionType?: any | null;
  actionLang2?: string | null;
  actionLang3?: string | null;
  actionLang4?: string | null;
  actionLang5?: string | null;
  actorFullnameLang1?: string | null;
  actorFullnameLang2?: string | null;
  actorFullnameLang3?: string | null;
  actorFullnameLang4?: string | null;
  actorFullnameLang5?: string | null;
  toFullnameLang1?: string | null;
  toFullnameLang2?: string | null;
  toFullnameLang3?: string | null;
  toFullnameLang4?: string | null;
  toFullnameLang5?: string | null;
  actionDate?: any | null;
  comment?: string | null;
  personActionObject?: PersonActionObject[] | null;
  personActionLike?: PersonActionLike[] | null;
  personActionComment?: any | null;
}
export type PersonActionViewName = "_base" | "_local" | "_minimal";
export type PersonActionView<V extends PersonActionViewName> = V extends "_base"
  ? Pick<
      PersonAction,
      | "id"
      | "actionLang1"
      | "actionLang2"
      | "actionLang3"
      | "actionLang4"
      | "actionLang5"
      | "actorFullnameLang1"
      | "actorFullnameLang2"
      | "actorFullnameLang3"
      | "actorFullnameLang4"
      | "actorFullnameLang5"
      | "toFullnameLang1"
      | "toFullnameLang2"
      | "toFullnameLang3"
      | "toFullnameLang4"
      | "toFullnameLang5"
      | "actionDate"
      | "comment"
    >
  : V extends "_local"
  ? Pick<
      PersonAction,
      | "id"
      | "actionLang1"
      | "actionLang2"
      | "actionLang3"
      | "actionLang4"
      | "actionLang5"
      | "actorFullnameLang1"
      | "actorFullnameLang2"
      | "actorFullnameLang3"
      | "actorFullnameLang4"
      | "actorFullnameLang5"
      | "toFullnameLang1"
      | "toFullnameLang2"
      | "toFullnameLang3"
      | "toFullnameLang4"
      | "toFullnameLang5"
      | "actionDate"
      | "comment"
    >
  : never;
