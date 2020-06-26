import { StandardEntity } from "../sys$StandardEntity";
export class UserEmailSettings extends StandardEntity {
  static NAME = "base$UserEmailSettings";
  user?: any | null;
  email?: string | null;
  password?: string | null;
  leaveMessageCopyOnServer?: boolean | null;
}
export type UserEmailSettingsViewName = "_base" | "_local" | "_minimal";
export type UserEmailSettingsView<
  V extends UserEmailSettingsViewName
> = V extends "_base"
  ? Pick<
      UserEmailSettings,
      "id" | "email" | "password" | "leaveMessageCopyOnServer"
    >
  : V extends "_local"
  ? Pick<
      UserEmailSettings,
      "id" | "email" | "password" | "leaveMessageCopyOnServer"
    >
  : V extends "_minimal"
  ? Pick<UserEmailSettings, "id" | "email">
  : never;
