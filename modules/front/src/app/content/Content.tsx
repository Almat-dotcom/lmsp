import React, {CSSProperties} from "react";
import ContentHeader from "./ContentHeader";
import './content.css'
import {observer} from "mobx-react";
import {action, observable} from "mobx";
import styles from "../common/hideSection/style.module.css";
import PlusSvgComponent, {HideSectionComponentHocProps} from "../common/hideSection/HideSectionComponentHoc";

export interface ContentProps {
  headerName: string,
  wrapperCss?: CSSProperties,
  contentWrapperCss?: CSSProperties,
  onHeaderClick?: () => void
}

export function ContentHoc(Child: JSX.Element, props: ContentProps): React.ComponentClass {

  class InnerContentComponent extends React.Component<ContentProps, {}> {
    render() {
      return <div className={"wrapper"} style={props.wrapperCss}>
        <div className={"content-wrapper"} style={props.contentWrapperCss}>
          <div className={"content-container"}>
            <ContentHeader headerName={props.headerName} onContentHeaderClick={props.onHeaderClick}/>
            {Child}
          </div>
        </div>
      </div>
    }
  }

  return InnerContentComponent;
}

export default ContentHoc;