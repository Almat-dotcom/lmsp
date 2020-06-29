import {CubaApp, FetchOptions} from "@cuba-platform/rest";

export interface Course {
  id: string,
  name: string
}

export var restServices = {
  tsadv_LmsService: {
    getPersonCourses: (cubaApp: CubaApp, fetchOpts?: FetchOptions) => () => {
      cubaApp.invokeService(
        "tsadv_LmsService",
        "getPersonCourses",
        {},
        fetchOpts
      ).then((response: string) => {
        const courses: Course[] = JSON.parse(response);
        return courses
      });
    }
  }
};
