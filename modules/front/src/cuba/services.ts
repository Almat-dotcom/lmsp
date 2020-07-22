import {CubaApp, EntityFilter, FetchOptions} from "@cuba-platform/rest";
import {ContentType} from "./enums/enums";
import {AnsweredTest} from "../app/content/course/training/remote/test/TestComponent";

export interface Course {
  id: string,
  name: string
}

interface CourseRegisteredParams {
  courseId: string
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
    }
  }
};
