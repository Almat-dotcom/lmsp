import React from "react";
import ContentHeader from "./ContentHeader";
import './content.css'

export interface ContentProps {
  headerName: string
}

export function Content<T extends ContentProps>(BodyComponent: React.ComponentType<T>) {
  return (props: T) => {
    return <div className={"wrapper"}>
      <div className={"content-wrapper"}>
        <div className={"content-container"}>
          <ContentHeader headerName={props.headerName}/>
          <BodyComponent {...props}/>
        </div>
      </div>
    </div>
  }
}

export default Content;