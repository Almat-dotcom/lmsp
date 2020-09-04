import React from "react";
import defaultImgSrc from "./default-logo.png";
import styles from './style.module.css'
import {Button} from "antd";
import {MaterialType} from "../MaterialContainerComponent";

export enum BoxType {
  DEFAULT = "DEFAULT",
  NO_BOX = "NO-BOX",
}

export interface MaterialComponentProps {
  id: string,
  name: string,
  logo: string | undefined,
  materialType: MaterialType,
  boxType: BoxType
}

export interface MaterialHandlers {
  onButtonClickHandler?: () => void,
  materialClickHandler?: (e: React.MouseEvent<HTMLDivElement>) => void
}

class MaterialComponent extends React.Component<MaterialComponentProps & MaterialHandlers> {
  render() {
    const {id, name, logo} = this.props;
    const imgSrc = logo ? "data:image/png;base64," + logo : defaultImgSrc;
    const materialClassName = styles['material-item'] + " "
      + styles["material-item-" + this.props.boxType.toLowerCase()] + " "
      + styles["material-item-btn-" + this.props.materialType.toLowerCase()];
    return (
      <div className={materialClassName} onMouseUp={this.props.materialClickHandler} data-id={id}><img
        src={imgSrc}
        alt={name!}/>
        <div className={styles["material-item-title"]}>{name}</div>
        {this.props.materialType === MaterialType.DEFAULT ? <div className={styles["registration-button-container"]}>
          <Button ghost={false} type={'primary'} onClick={this.props.onButtonClickHandler}>Пройти</Button>
        </div> : <></>}
      </div>)
  }
}

export default MaterialComponent;