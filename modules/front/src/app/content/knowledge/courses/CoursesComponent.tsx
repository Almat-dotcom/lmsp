import React from "react";
import {observer} from "mobx-react";
import Content from "../../Content";
import {injectIntl, WrappedComponentProps} from "react-intl";
import {withRouter} from 'react-router-dom'
import {RouteComponentProps} from "react-router";
import CoursesSliderDsComponent from "../../course/coursesslider/CoursesSliderDsComponent";

@observer
class CoursesComponent extends React.Component<WrappedComponentProps & RouteComponentProps> {
  render() {
    const CoursesBodyComponent = <CoursesSliderDsComponent showSearch={true} elementsPerSlide={4}/>;

    const CoursesComponent = Content(CoursesBodyComponent, {
      headerName: "курсы",
    });
    return <CoursesComponent/>;
  }
}

export default injectIntl(withRouter(CoursesComponent));