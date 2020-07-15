import {AbstractParentEntity} from "../base/uco/AbstractParentEntity";
import {Course} from "./tsadv$Course";

export class LearningObject extends AbstractParentEntity {
  static NAME = "tsadv$LearningObject";
  objectName?: string | null = null;
  description?: string | null = null;
  url?: string | null = null;
  contentType?: string | null = null;
  file?: any | null = null;
  html?: string | null = null;
  text?: string | null = null;
}

// public class LearningObject extends AbstractParentEntity {
//   private static final long serialVersionUID = -5941821204696144587L;
//
//   @Column(name = "OBJECT_NAME", nullable = false)
//   protected String objectName;
//
//   @Column(name = "DESCRIPTION", nullable = false, length = 4000)
//   protected String description;
//
//   @Column(name = "URL", length = 4000)
//   protected String url;
//
//   @NotNull
//   @Column(name = "CONTENT_TYPE", nullable = false)
//   protected String contentType;
//
//   @ManyToOne(fetch = FetchType.LAZY)
//   @JoinColumn(name = "FILE_ID")
//   protected FileDescriptor file;
//
//   @Lob
//   @Column(name = "HTML")
//   protected String html;
//
//   @Lob
//   @Column(name = "TEXT")
//   protected String text;

export type LearningObjectViewName = "_base" | "_local" | "_minimal";
// export type CourseSectionView<V extends CourseSectionObjectViewName> = V extends "_base"
//   ? Pick<Course,
//     | "id"
//     | "name"
//     | "description"
//     | "logo"
//     | "targetAudience"
//     | "activeFlag"
//     | "shortDescription"
//     | "selfEnrollment"
//     | "legacyID">
//   : V extends "_local"
//     ? Pick<Course,
//       | "id"
//       | "name"
//       | "description"
//       | "logo"
//       | "targetAudience"
//       | "activeFlag"
//       | "shortDescription"
//       | "selfEnrollment"
//       | "legacyID">
//     : V extends "_minimal"
//       ? Pick<Course, "id" | "name">
//       : never;
