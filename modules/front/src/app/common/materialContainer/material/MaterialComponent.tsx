import React from "react";
import defaultImgSrc from "./default-logo.png";
import styles from './style.module.css'
import {Button} from "antd";
import {MaterialType} from "../MaterialContainerComponent";

export enum BoxType {
  DEFAULT = "DEFAULT",
  NO_BOX = "NO-BOX",
}

export enum LogoType {
  URL = "URL",
  BASE64 = "BASE64"
}

export interface MaterialComponentProps {
  id: string,
  name: string,
  logo?: string,
  logoType?: LogoType,
  Footer?: JSX.Element,
  boxType: BoxType
}

export interface MaterialHandlers {
  onButtonClickHandler?: () => void,
  materialClickHandler?: (e: React.MouseEvent<HTMLDivElement>) => void
}

class MaterialComponent extends React.Component<MaterialComponentProps & MaterialHandlers> {
  render() {
    const {id, name, logo, logoType, Footer, materialClickHandler} = this.props;
    const imgSrc =
      logo && logoType
        ? logoType === LogoType.BASE64
        ? "data:image/png;base64," + logo
        : logo
        : defaultImgSrc;
    const materialClassName = styles['material-item'] + " " + (materialClickHandler ? styles['clickable'] + " " : "")
      + styles["material-item-" + this.props.boxType.toLowerCase()];
    return (
      <div className={materialClassName} onMouseUp={this.props.materialClickHandler} data-id={id}><img
        src={imgSrc}
        alt={name!}/>
        <div className={styles["material-item-title"]}>{name}</div>
        {Footer ? <div className={styles["footer"]}>{Footer}</div> : <></>}
      </div>)
  }
}

export default MaterialComponent;