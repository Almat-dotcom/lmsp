import { AbstractDictionary } from "./AbstractDictionary";
export class DicLCArticle extends AbstractDictionary {
  static NAME = "tsadv$DicLCArticle";
  article?: string | null;
  item?: string | null;
  subItem?: string | null;
  attribute?: any | null;
}
export type DicLCArticleViewName = "_base" | "_local" | "_minimal";
export type DicLCArticleView<V extends DicLCArticleViewName> = V extends "_base"
  ? Pick<
      DicLCArticle,
      | "id"
      | "langValue"
      | "article"
      | "item"
      | "subItem"
      | "attribute"
      | "legacyID"
      | "langValue1"
      | "description1"
      | "langValue2"
      | "description2"
      | "langValue3"
      | "description3"
      | "langValue4"
      | "description4"
      | "langValue5"
      | "description5"
      | "startDate"
      | "endDate"
      | "code"
      | "isSystemRecord"
      | "active"
      | "order"
      | "description"
    >
  : V extends "_local"
  ? Pick<
      DicLCArticle,
      | "id"
      | "article"
      | "item"
      | "subItem"
      | "attribute"
      | "legacyID"
      | "langValue1"
      | "description1"
      | "langValue2"
      | "description2"
      | "langValue3"
      | "description3"
      | "langValue4"
      | "description4"
      | "langValue5"
      | "description5"
      | "startDate"
      | "endDate"
      | "code"
      | "isSystemRecord"
      | "active"
      | "order"
      | "langValue"
      | "description"
    >
  : V extends "_minimal"
  ? Pick<DicLCArticle, "id" | "langValue">
  : never;
