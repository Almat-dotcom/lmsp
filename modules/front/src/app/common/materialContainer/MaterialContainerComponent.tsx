import React from "react";
import {Course} from "../../../cuba/entities/tsadv/tsadv$Course";
import styles from './style.module.css';
import MaterialComponent, {BoxType} from "./material/MaterialComponent";
import {SerializedEntity} from "@cuba-platform/rest";

export enum MaterialType {
  DEFAULT = "DEFAULT",
  NO_BUTTON = "NO-BUTTON"
}

export type MaterialModel = {
  id: string,
  name: string,
  logo?: string
}

type MaterialData = Course | SerializedEntity<Course> | MaterialModel

export interface CourseProps {
  materialData: Array<MaterialData>,
  materialType: MaterialType
  boxType: BoxType
}

export interface CourseHandlers {
  onButtonClickHandler?: () => void
  materialClickHandler?: (e: React.MouseEvent<HTMLDivElement>) => void
}

class MaterialContainerComponent extends React.Component<CourseProps & CourseHandlers> {
  render() {
    const {materialData} = this.props;
    const containerClassName = "material-container-" + this.props.materialType.toLowerCase();
    return (
      <div className={styles["material-wrapper"]}>
        <div className={styles[containerClassName]}>
          <div className={styles["material-items"]}>
            {materialData.map((material: MaterialData) => (
              <MaterialComponent id={material.id!} name={material.name!} logo={material.logo}
                                 materialType={this.props.materialType}
                                 onButtonClickHandler={this.props.onButtonClickHandler}
                                 boxType={this.props.boxType}
                                 materialClickHandler={this.props.materialClickHandler}/>))}
          </div>
        </div>
      </div>);
  }
}

export default MaterialContainerComponent;