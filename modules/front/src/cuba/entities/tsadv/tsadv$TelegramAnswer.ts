import { StandardEntity } from "../base/sys$StandardEntity";
export class TelegramAnswer extends StandardEntity {
  static NAME = "tsadv$TelegramAnswer";
  comandName?: string | null;
  variable?: any | null;
}
export type TelegramAnswerViewName = "_base" | "_local" | "_minimal";
export type TelegramAnswerView<
  V extends TelegramAnswerViewName
> = V extends "_base"
  ? Pick<TelegramAnswer, "id" | "comandName">
  : V extends "_local"
  ? Pick<TelegramAnswer, "id" | "comandName">
  : V extends "_minimal"
  ? Pick<TelegramAnswer, "id" | "comandName">
  : never;
