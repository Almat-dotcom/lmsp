import { StandardEntity } from "../base/sys$StandardEntity";
import { FileDescriptor } from "../base/sys$FileDescriptor";
import { BookReview } from "./tsadv$BookReview";
export class Book extends StandardEntity {
  static NAME = "tsadv$Book";
  bookNameLang1?: string | null;
  bookDescriptionLang1?: string | null;
  authorLang1?: string | null;
  publishDate?: any | null;
  isbn?: string | null;
  active?: boolean | null;
  averageScore?: any | null;
  category?: any | null;
  image?: FileDescriptor | null;
  language?: string | null;
  fb2?: FileDescriptor | null;
  epub?: FileDescriptor | null;
  mobi?: FileDescriptor | null;
  kf8?: FileDescriptor | null;
  pdf?: FileDescriptor | null;
  djvu?: FileDescriptor | null;
  reviews?: BookReview[] | null;
}
export type BookViewName = "_base" | "_local" | "_minimal";
export type BookView<V extends BookViewName> = V extends "_base"
  ? Pick<
      Book,
      | "id"
      | "bookNameLang1"
      | "bookDescriptionLang1"
      | "authorLang1"
      | "publishDate"
      | "isbn"
      | "active"
      | "averageScore"
      | "language"
    >
  : V extends "_local"
  ? Pick<
      Book,
      | "id"
      | "bookNameLang1"
      | "bookDescriptionLang1"
      | "authorLang1"
      | "publishDate"
      | "isbn"
      | "active"
      | "averageScore"
      | "language"
    >
  : V extends "_minimal"
  ? Pick<Book, "id" | "bookNameLang1">
  : never;
