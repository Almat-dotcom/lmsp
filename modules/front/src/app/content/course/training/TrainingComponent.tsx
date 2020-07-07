import React from "react";
import {injectIntl, WrappedComponentProps} from "react-intl";
import './style.css'
import TrainingDescriptionComponent from "./TrainingDescriptionComponent";
import {CourseData} from "../CourseComponent";
import {CourseSection} from "../../../../cuba/entities/tsadv/tsadv$CourseSection";
import {action, observable} from "mobx";
import {observer} from "mobx-react";

interface TrainingComponentProps {
  course: CourseData,
  courseSection: CourseSection | null
}

interface Coordinates {
  lat: number,
  lng: number,
}

//TODO: Переписать весь класс
@observer
class TrainingComponent extends React.Component<TrainingComponentProps & WrappedComponentProps> {

  @observable coordinates: Coordinates | null = null;

  componentDidMount(): void {
    if (this.coordinates) {
      debugger;
      //@ts-ignore
      var map = new window.google.maps.Map(document.getElementById('google-map-container'), {
        zoom: 13,
        center: this.coordinates
      });
      //@ts-ignore
      var marker = new window.google.maps.Marker({position: this.coordinates, map: map});
      //@ts-ignore
      var myLatlng = new window.google.maps.LatLng(50.5792659, 8.6744471);
    }
  }

  @action setCoordinates = (latitude: number, longitude: number) => {
    this.coordinates = {lat: latitude, lng: longitude};
  };

  render() {
    const {course, courseSection} = this.props;
    let TrainingBodyComponent: React.ReactElement | null = null;
    if (courseSection) {
      debugger;
      if (courseSection.sectionObject && courseSection.sectionObject.content && (courseSection.sectionObject.content.contentType.toLowerCase() === 'html' || courseSection.sectionObject.content.contentType.toLowerCase() === 'url')) {
        if (courseSection.sectionObject.content.contentType.toLowerCase() === 'html') {
          TrainingBodyComponent = React.createElement("div", {
            dangerouslySetInnerHTML: {__html: courseSection.sectionObject.content.html!},
            className: 'section-container-body'
          })
        } else {
          TrainingBodyComponent = React.createElement("iframe", {
            src: courseSection.sectionObject.content.url!,
            className: 'section-container-body'
          })
        }
      } else if (courseSection.session && courseSection.session.length > 0) {
        const session = courseSection.session[0];
        TrainingBodyComponent = React.createElement("div", {
            className: 'section-container-body'
          }, React.createElement("div", {
            className: 'title-container',
          }, React.createElement("span", {}, this.props.intl.formatMessage({id: 'address'}) + ': ' + ''),
          React.createElement("span", {}, this.props.intl.formatMessage({id: 'startDate'}) + ': ' + session.startDate),
          React.createElement("span", {}, this.props.intl.formatMessage({id: 'endDate'}) + ': ' + session.endDate)),
          React.createElement("div", {
            id: 'google-map-container',
          }));

        const learningCenter = courseSection.session[0].learningCenter;

        this.setCoordinates(learningCenter.latitude, learningCenter.longitude);
      }
    }
    return course.hasEnrollment && courseSection ?
      TrainingBodyComponent :
      <TrainingDescriptionComponent course={course}/>
  }
}

export default injectIntl(TrainingComponent);