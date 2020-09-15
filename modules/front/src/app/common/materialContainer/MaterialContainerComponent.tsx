import React from "react";
import {Course} from "../../../cuba/entities/tsadv/tsadv$Course";
import styles from './style.module.css';
import MaterialComponent, {BoxType, LogoType} from "./material/MaterialComponent";
import {SerializedEntity} from "@cuba-platform/rest";
import {BookMaterialModel} from "../../content/knowledge/books/BooksComponent";

export enum MaterialType {
  DEFAULT = "DEFAULT",
  NO_BUTTON = "NO-BUTTON"
}

export type MaterialModel = {
  id: string,
  name: string,
  logo?: string
}

export type MaterialData = Course | SerializedEntity<Course> | MaterialModel | BookMaterialModel

export interface CourseProps {
  materialData: Array<MaterialData>,
  boxType: BoxType,
  logoType?: LogoType
  footer?: (a: MaterialData) => JSX.Element
}

export interface CourseHandlers {
  onButtonClickHandler?: () => void
  materialClickHandler?: (e: React.MouseEvent<HTMLDivElement>) => void
}

class MaterialContainerComponent extends React.Component<CourseProps & CourseHandlers> {
  render() {
    const {materialData, logoType, footer, boxType} = this.props;
    const containerClassName = "material-container";
    return (
      <div className={styles["material-wrapper"]}>
        <div className={styles[containerClassName]}>
          <div className={styles["material-items"]}>
            {materialData.map((material: MaterialData) => (
              <MaterialComponent id={material.id!} name={material.name!} logo={material.logo}
                                 Footer={footer ? footer(material) : <></>}
                                 logoType={logoType ? logoType : LogoType.BASE64}
                                 onButtonClickHandler={this.props.onButtonClickHandler}
                                 boxType={boxType}
                                 materialClickHandler={this.props.materialClickHandler}/>))}
          </div>
        </div>
      </div>);
  }
}

export default MaterialContainerComponent;