import React from 'react'
import {Course, restServices} from "../../../../cuba/services";
import {getCubaREST} from "@cuba-platform/react";
import Content from "../../Content";

class CurrentCourses extends React.Component {
  render() {
    const data = restServices.tsadv_LmsService.getPersonCourses(getCubaREST()!);
    const bodyComponent = class extends React.Component {
      render() {
        return <div>test content</div>
      }
    };

    const ContentComponent = Content(bodyComponent);
    return <ContentComponent />;
  }
}

export default CurrentCourses