import {CubaApp, EntityFilter, FetchOptions} from "@cuba-platform/rest";
import {ContentType} from "./enums/enums";
import {AnsweredTest} from "../app/content/course/training/remote/test/TestComponent";
import {AnsweredFeedback} from "../app/content/course/training/feedback/FeedbackQuestionAnswerComponent";

export interface Course {
  id: string,
  name: string
}

interface CourseRegisteredParams {
  courseId: string
}

export interface Response {
  status: string,
  message: string,
}

export var restServices = {
  tsadv_LmsService: {
    getPersonCourses: (cubaApp: CubaApp, fetchOpts?: FetchOptions) => () => {
      return cubaApp.invokeService(
        "tsadv_LmsService",
        "getPersonCourses",
        {},
        fetchOpts
      );
    },
    getPersonHistory: (cubaApp: CubaApp, fetchOpts?: FetchOptions) => () => {
      return cubaApp.invokeService(
        "tsadv_LmsService",
        "getPersonHistory",
        {},
        fetchOpts
      );
    },
    hasEnrollment: (cubaApp: CubaApp, params: CourseRegisteredParams, fetchOpts?: FetchOptions) => () => {
      return cubaApp.invokeService(
        "tsadv_LmsService",
        "hasEnrollment",
        {...params},
        fetchOpts
      );
    },
    loadCourseData: (cubaApp: CubaApp, params: CourseRegisteredParams, fetchOpts?: FetchOptions) => () => {
      return cubaApp.invokeService(
        "tsadv_LmsService",
        "loadCourseData",
        {...params},
        fetchOpts
      );
    },
    registerToCourse: (cubaApp: CubaApp, params: CourseRegisteredParams, fetchOpts?: FetchOptions) => () => {
      return cubaApp.invokeService(
        "tsadv_LmsService",
        "registerToCourse",
        {...params},
        fetchOpts
      );
    },
    loadCourses: (cubaApp: CubaApp, params: EntityFilter, fetchOpts?: FetchOptions) => async () => {
      return await cubaApp.invokeService(
        "tsadv_LmsService",
        "loadCourses",
        {...params},
        fetchOpts
      );
    },
    loadLearningObject: (cubaApp: CubaApp, params: { contentType: ContentType }, fetchOpts?: FetchOptions) => async () => {
      return await cubaApp.invokeService(
        "tsadv_LmsService",
        "loadLearningObject",
        {...params},
        fetchOpts
      );
    },
    startAndLoadTest: (cubaApp: CubaApp, params: { courseSectionObjectId: string, enrollmentId: string }, fetchOpts?: FetchOptions) => async () => {
      return await cubaApp.invokeService(
        "tsadv_LmsService",
        "startAndLoadTest",
        {...params},
        fetchOpts
      );
    },
    startAndLoadTestById: (cubaApp: CubaApp, params: { testId: string }, fetchOpts?: FetchOptions) => async () => {
      return await cubaApp.invokeService(
        "tsadv_LmsService",
        "startAndLoadTest",
        {...params},
        fetchOpts
      );
    },
    loadPersonTests: (cubaApp: CubaApp, fetchOpts?: FetchOptions) => async () => {
      return await cubaApp.invokeService(
        "tsadv_LmsService",
        "loadPersonTests",
        fetchOpts
      );
    },
    finishTest: (cubaApp: CubaApp, params: { answeredTest: AnsweredTest }, fetchOpts?: FetchOptions) => async () => {
      return await cubaApp.invokeService(
        "tsadv_LmsService",
        "finishTest",
        {...params},
        fetchOpts
      );
    },
    loadPersonProgress: (cubaApp: CubaApp, fetchOpts?: FetchOptions) => async () => {
      return await cubaApp.invokeService(
        "tsadv_LmsService",
        "loadPersonProgress",
        fetchOpts
      );
    },
    loadReportByCode: (cubaApp: CubaApp, params: { reportCode: string }, fetchOpts?: FetchOptions) => async () => {
      return await cubaApp.invokeService(
        "tsadv_LmsService",
        "loadReportByCode",
        {...params},
        fetchOpts
      );
    },
    getCertificate: (cubaApp: CubaApp, params: { enrollmentId: string }, fetchOpts?: FetchOptions) => async () => {
      return await cubaApp.invokeService(
        "tsadv_LmsService",
        "getCertificate",
        {...params},
        fetchOpts
      );
    },
    removeCertificate: (cubaApp: CubaApp, params: { certificateFileId: string }, fetchOpts?: FetchOptions) => async () => {
      return await cubaApp.invokeService(
        "tsadv_LmsService",
        "removeCertificate",
        {...params},
        fetchOpts
      );
    },
    personMonthEvents: (cubaApp: CubaApp, params: { date: Date }, fetchOpts?: FetchOptions) => async () => {
      return await cubaApp.invokeService(
        "tsadv_LmsService",
        "personMonthEvents",
        {...params},
        fetchOpts
      );
    },
    getPersonNotifications: (cubaApp: CubaApp, fetchOpts?: FetchOptions) => async () => {
      return await cubaApp.invokeService(
        "tsadv_LmsService",
        "getPersonNotifications",
        fetchOpts
      );
    },
    getNotification: (cubaApp: CubaApp, params: { notificationId: string }, fetchOpts?: FetchOptions) => async () => {
      return await cubaApp.invokeService(
        "tsadv_LmsService",
        "getNotification",
        {...params},
        fetchOpts
      );
    },
    changePassword: (cubaApp: CubaApp, params: { oldPassword: string, newPassword: string }, fetchOpts?: FetchOptions) => async () => {
      return await cubaApp.invokeService(
        "tsadv_LmsService",
        "changePassword",
        {...params},
        fetchOpts
      );
    },
    restorePassword: (cubaApp: CubaApp, params: { userLogin: string }, fetchOpts?: FetchOptions) => async () => {
      return await cubaApp.invokeService(
        "tsadv_LmsService",
        "restorePassword",
        {...params},
        fetchOpts
      );
    },
    getCourseTrainers: (cubaApp: CubaApp, params: { courseId: string }, fetchOpts?: FetchOptions) => async () => {
      return await cubaApp.invokeService(
        "tsadv_LmsService",
        "getCourseTrainers",
        {...params},
        fetchOpts
      );
    },
    loadFeedbackData: (cubaApp: CubaApp, params: { feedbackTemplateId: string }, fetchOpts?: FetchOptions) => async () => {
      return await cubaApp.invokeService(
        "tsadv_LmsService",
        "loadFeedbackData",
        {...params},
        fetchOpts
      );
    },
    finishFeedback: (cubaApp: CubaApp, params: { answeredFeedback: AnsweredFeedback }, fetchOpts?: FetchOptions) => async () => {
      return await cubaApp.invokeService(
        "tsadv_LmsService",
        "finishFeedback",
        {...params},
        fetchOpts
      );
    },
    loadCourseSectionData: (cubaApp: CubaApp, params: { enrollmentId: string, courseSectionId: string }, fetchOpts?: FetchOptions) => async () => {
      return await cubaApp.invokeService(
        "tsadv_LmsService",
        "loadCourseSectionData",
        {...params},
        fetchOpts
      );
    },
    loadBooks: (cubaApp: CubaApp, params: {}, fetchOpts?: FetchOptions) => async () => {
      return await cubaApp.invokeService(
        "tsadv_LmsService",
        "loadBooks",
        {...params},
        fetchOpts
      );
    }
  }
};
