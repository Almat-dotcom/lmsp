import React from "react";
import {injectIntl, WrappedComponentProps} from "react-intl";
import {action, observable} from "mobx";
import moment from "moment";

interface TrainingHtmlComponentProps {
  session: Array<any>
}

interface Coordinates {
  lat: number,
  lng: number,
}

class WebinarComponent extends React.Component<TrainingHtmlComponentProps & WrappedComponentProps> {
  @observable coordinates: Coordinates | null = null;


  @action setCoordinates = (latitude: number, longitude: number) => {
    this.coordinates = {lat: latitude, lng: longitude};
  };

  componentDidMount(): void {
    if (this.coordinates) {
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

  render() {
    const {session} = this.props;
    const webinarSession = session[0];
    console.log(session);
    this.setCoordinates(webinarSession.learningCenter.latitude, webinarSession.learningCenter.longitude);
    return <div className={"section-container-body"}>
      <div className={"title-container"}>
        <span>{this.props.intl.formatMessage({id: 'address'}) + ': ' + (webinarSession.learningCenter.address ? webinarSession.learningCenter.address : '')}</span>
        <span>{this.props.intl.formatMessage({id: 'startDate'}) + ': ' + (webinarSession.startDate ? moment(webinarSession.startDate).format('DD.MM.YYYY') : '')}</span>
        <span>{this.props.intl.formatMessage({id: 'endDate'}) + ': ' + (webinarSession.endDate ? moment(webinarSession.endDate).format('DD.MM.YYYY') : '')}</span>
        <div id={"google-map-container"}/>
      </div>
    </div>
  }
}

export default injectIntl(WebinarComponent)