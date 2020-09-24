import { User } from "./sec$User";
import { FileDescriptor } from "./sys$FileDescriptor";
export class UserExt extends User {
  static NAME = "base$UserExt";
  image?: FileDescriptor | null;
  atsCode?: string | null;
  innerNumber?: string | null;
  availability?: boolean | null;
  mobilePhone?: string | null;
  telegramCode?: string | null;
  telegramChatId?: string | null;
  emailSettings?: any | null;
  addressBookEntries?: any | null;
  passwordChangeDate?: any | null;
  shortName?: string | null;
  fullName?: string | null;
}
export type UserExtViewName = "_base" | "_local" | "_minimal";
export type UserExtView<V extends UserExtViewName> = V extends "_base"
  ? Pick<
    UserExt,
    | "id"
    | "login"
    | "name"
    | "atsCode"
    | "innerNumber"
    | "availability"
    | "mobilePhone"
    | "telegramCode"
    | "telegramChatId"
    | "passwordChangeDate"
    | "shortName"
    | "fullName"
    | "loginLowerCase"
    | "password"
    | "passwordEncryption"
    | "firstName"
    | "lastName"
    | "middleName"
    | "position"
    | "email"
    | "language"
    | "timeZone"
    | "timeZoneAuto"
    | "active"
    | "changePasswordAtNextLogon"
    | "ipMask"
    >
  : V extends "_local"
    ? Pick<
      UserExt,
      | "id"
      | "atsCode"
      | "innerNumber"
      | "availability"
      | "mobilePhone"
      | "telegramCode"
      | "telegramChatId"
      | "passwordChangeDate"
      | "shortName"
      | "fullName"
      | "login"
      | "loginLowerCase"
      | "password"
      | "passwordEncryption"
      | "name"
      | "firstName"
      | "lastName"
      | "middleName"
      | "position"
      | "email"
      | "language"
      | "timeZone"
      | "timeZoneAuto"
      | "active"
      | "changePasswordAtNextLogon"
      | "ipMask"
      >
    : V extends "_minimal"
      ? Pick<UserExt, "id" | "login" | "name">
      : never;
