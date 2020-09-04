import React, {CSSProperties} from "react";
import {observer} from "mobx-react";
import styles from "./style.module.css";
import {action, observable} from "mobx";
import PlusSvgComponent from "../../content/course/training/remote/PlusSvgComponent";
import MinusSvgComponent from "../../content/course/training/remote/test/MinusSvgComponent";

export interface HideSectionComponentHocProps {
  hideButtonStyle?: CSSProperties
}

export function HideSectionComponentHoc(Child: JSX.Element, props?: HideSectionComponentHocProps): React.ComponentClass {

  @observer
  class InnerHideComponent extends React.Component<HideSectionComponentHocProps, {}> {

    @observable isHide: boolean = false;

    showHideOnClick = (e: React.MouseEvent<HTMLDivElement>) => {
      this.setIsHide(!this.isHide)
    };

    @action setIsHide = (value: boolean) => {
      this.isHide = value;
    };

    render() {
      const questionContainerClass = styles["section-container"] + " " + (this.isHide ? styles["hidden"] : "");
      return <div className={styles["section-block"]}>
        <div style={props ? props.hideButtonStyle : props} className={styles["hide-button-group"]}
             onClick={this.showHideOnClick}>
          {this.isHide ? <>
            <PlusSvgComponent/>
            <span>Развернуть</span></> : <>
            <MinusSvgComponent/>
            <span>Скрыть</span></>}
        </div>
        <div className={questionContainerClass}>
          {Child}
        </div>
      </div>
    }
  }

  return InnerHideComponent;
}

export default HideSectionComponentHoc;