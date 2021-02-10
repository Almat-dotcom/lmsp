import React from "react";

export interface ContentHeaderProps {
  headerName: string,
  onContentHeaderClick? : () => void,
}

class ContentHeader extends React.Component<ContentHeaderProps> {
  render() {
    return <div className={"content-container-header"}>
      <h1 className={"courses-container-header"} style={this.props.onContentHeaderClick ? {cursor: "pointer"} : {}}
          onClick={this.props.onContentHeaderClick}>{this.props.headerName}</h1>
      <hr/>
    </div>
  }
}

export default ContentHeader;