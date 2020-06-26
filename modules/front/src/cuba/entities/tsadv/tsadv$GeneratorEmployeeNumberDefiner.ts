import { StandardEntity } from "../base/sys$StandardEntity";
import { GeneratorEmployeeNumber } from "./tsadv$GeneratorEmployeeNumber";
export class GeneratorEmployeeNumberDefiner extends StandardEntity {
  static NAME = "tsadv$GeneratorEmployeeNumberDefiner";
  generatorEmployeeNumber?: GeneratorEmployeeNumber | null;
  personType?: any | null;
}
export type GeneratorEmployeeNumberDefinerViewName =
  | "_base"
  | "_local"
  | "_minimal";
export type GeneratorEmployeeNumberDefinerView<
  V extends GeneratorEmployeeNumberDefinerViewName
> = never;
