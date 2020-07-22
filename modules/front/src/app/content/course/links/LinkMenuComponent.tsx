import React from "react";

export interface Props {
  key: string,
  captionMessage: string,
  link: string,
}

class LinkMenuComponent extends React.Component<Props> {
  render() {
    return <a href={this.props.link} target={"_blank"}>
      <li key={this.props.key}>{this.props.captionMessage}</li>
    </a>
  }
}

export default LinkMenuComponent;