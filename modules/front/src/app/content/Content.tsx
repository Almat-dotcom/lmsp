import React, {CSSProperties} from "react";
import ContentHeader from "./ContentHeader";
import './content.css'

export interface ContentProps {
  headerName: string,
  wrapperCss?: CSSProperties,
  contentWrapperCss?: CSSProperties
}

export function Content<T extends ContentProps>(BodyComponent: React.ComponentType<T>) {
  return (props: T) => {
    return <div className={"wrapper"} style={props.wrapperCss}>
      <div className={"content-wrapper"} style={props.contentWrapperCss}>
        <div className={"content-container"}>
          <ContentHeader headerName={props.headerName}/>
          <BodyComponent {...props}/>
        </div>
      </div>
    </div>
  }
}

export default Content;