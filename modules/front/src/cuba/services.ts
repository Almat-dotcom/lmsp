import {CubaApp, FetchOptions} from "@cuba-platform/rest";

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
    }
  }
};
