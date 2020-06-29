import React from "react";
import ContentHeader from "./ContentHeader";

export function Content<T>(BodyComponent: React.ComponentType<T>) {
  return (props: T) => (<div className={"content-wrapper"}>
    <div className={"content-container"}>
      <ContentHeader headerName={"курсы"}/>
      <BodyComponent {...props}/>
    </div>
  </div>)
}

export default Content;