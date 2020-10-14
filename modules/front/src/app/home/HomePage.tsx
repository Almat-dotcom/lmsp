import * as React from "react";
import {BoxType} from "../common/materialContainer/material/MaterialComponent";
import LoadingComponent from "../common/loading/LoadingComponent";
import {Course} from "../../cuba/entities/tsadv/tsadv$Course";
import {observer} from "mobx-react";
import {RouteComponentProps} from "react-router";
import {withRouter} from 'react-router-dom'
import {restServices} from "../../cuba/services";
import styles from './style.module.css'
import MaterialContainerComponent from "../common/materialContainer/MaterialContainerComponent";
import PaginationLoadParent, {PromiseFunc} from "../common/PaginationLoadParent";


@observer
class HomePage extends PaginationLoadParent<Course, RouteComponentProps> {

  getLoadParams = (): PromiseFunc => {
    return {
      loadFunc: restServices.tsadv_LmsService.loadCourses
    }
  };

  courseClickHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    this.props.history.push("/course/" + e.currentTarget.dataset.id);
  };

  render() {
    const BodyComponent = this.loadedData ? React.createElement(MaterialContainerComponent, {
      materialData: this.loadedData,
      boxType: BoxType.DEFAULT,
      materialClickHandler: this.courseClickHandler,
      loadMoreClickHandler: this.incrementPage,
      hasLoadMore: this.currentPage < this.pageCount
    }) : React.createElement(LoadingComponent);

    return (
      <div>
        <div className={styles["content-wrapper"]}>{BodyComponent}</div>
      </div>
    );
  }
}

export default withRouter(HomePage);
