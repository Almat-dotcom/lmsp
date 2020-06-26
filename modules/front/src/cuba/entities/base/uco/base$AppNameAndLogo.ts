import { StandardEntity } from "../sys$StandardEntity";
import { FileDescriptor } from "../sys$FileDescriptor";
export class AppNameAndLogo extends StandardEntity {
  static NAME = "base$AppNameAndLogo";
  name?: string | null;
  welcomeToName?: string | null;
  logo?: FileDescriptor | null;
  topLogoSize?: number | null;
  loginLogoSize?: number | null;
  mainLogoSize?: number | null;
  primary?: boolean | null;
}
export type AppNameAndLogoViewName = "_base" | "_local" | "_minimal";
export type AppNameAndLogoView<
  V extends AppNameAndLogoViewName
> = V extends "_base"
  ? Pick<
      AppNameAndLogo,
      | "id"
      | "name"
      | "welcomeToName"
      | "topLogoSize"
      | "loginLogoSize"
      | "mainLogoSize"
      | "primary"
    >
  : V extends "_local"
  ? Pick<
      AppNameAndLogo,
      | "id"
      | "name"
      | "welcomeToName"
      | "topLogoSize"
      | "loginLogoSize"
      | "mainLogoSize"
      | "primary"
    >
  : V extends "_minimal"
  ? Pick<AppNameAndLogo, "id" | "name">
  : never;
