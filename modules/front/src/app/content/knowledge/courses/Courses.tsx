import React from "react";
import Search from "../../../common/Search";
import {observer} from "mobx-react";
import {action, observable} from "mobx";
import {Course} from "../../../../cuba/entities/tsadv/tsadv$Course";
import Content from "../../Content";
import {injectIntl, WrappedComponentProps} from "react-intl";
import LoadingComponent from "../../../common/loading/LoadingComponent";
import {withRouter} from 'react-router-dom'
import {RouteComponentProps} from "react-router";
import {BoxType} from "../../../common/materialContainer/material/MaterialComponent";
import {Condition, EntityFilter} from "@cuba-platform/rest";
import {restServices} from "../../../../cuba/services";
import MaterialContainerComponent from "../../../common/materialContainer/MaterialContainerComponent";
import PaginationLoadParent, {PromiseFunc} from "../../../common/PaginationLoadParent";

@observer
class Courses extends PaginationLoadParent<Course, WrappedComponentProps & RouteComponentProps> {

  searchProperty: string = 'name';

  @observable coursesConditions: EntityFilter | undefined;

  @action setCoursesConditions = (value: EntityFilter | undefined) => {
    this.coursesConditions = value;
  };

  setSingleCondition = (value: Condition | undefined) => {
    if (value) {
      this.setCoursesConditions({conditions: [value]});
    } else {
      this.setCoursesConditions(undefined);
    }
  };

  getLoadParams = (): PromiseFunc => {
    return {
      loadFunc: restServices.tsadv_LmsService.loadCourses,
      loadParams: {
        ...this.coursesConditions
      }
    };
  };

  courseClickHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    this.props.history.push("/course/" + e.currentTarget.dataset.id);
  };

  @action onSearch = (value: string, event?: React.ChangeEvent<HTMLInputElement> | React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLInputElement>) => {
    this.resetPage();
    if (value.trim() === '') {
      this.setSingleCondition(undefined);
      this.load();
      return;
    }

    const searchCondition: Condition = {
      property: this.searchProperty,
      operator: 'contains',
      value: value
    };
    this.setSingleCondition(searchCondition);
    this.load();
  };

  render() {
    const BodyComponent = this.loadedData ? React.createElement(MaterialContainerComponent, {
      materialData: this.loadedData,
      boxType: BoxType.DEFAULT,
      materialClickHandler: this.courseClickHandler,
      loadMoreClickHandler: this.incrementPage,
      hasLoadMore: this.currentPage < this.pageCount
    }) : React.createElement(LoadingComponent);

    const CoursesBodyComponent = <div className={"courses-container"}>
      <Search placeholder={"Введите название курса"} onSearch={this.onSearch}/>
      {BodyComponent}
    </div>;

    const CoursesComponent = Content(CoursesBodyComponent, {
      headerName: "курсы",
    });
    return <CoursesComponent/>;
  }
}

export default injectIntl(withRouter(Courses));