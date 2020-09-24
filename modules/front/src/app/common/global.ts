import {getCubaREST} from "@cuba-platform/react";

export const wrapFileUrl = (url: string) => {
  return getCubaREST()!.getFileUploadURL() + "/" + url + "?access_token=" + getCubaREST()!.restApiToken
};