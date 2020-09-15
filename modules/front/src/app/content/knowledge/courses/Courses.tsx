import React from "react";
import Search from "../../../common/Search";
import {observer} from "mobx-react";
import {action, observable} from "mobx";
import {Course} from "../../../../cuba/entities/tsadv/tsadv$Course";
import {getCubaREST} from "@cuba-platform/react";
import Content from "../../Content";
import {injectIntl, WrappedComponentProps} from "react-intl";
import LoadingComponent from "../../../common/loading/LoadingComponent";
import {withRouter} from 'react-router-dom'
import {RouteComponentProps} from "react-router";
import {BoxType} from "../../../common/materialContainer/material/MaterialComponent";
import {Condition, EntityFilter} from "@cuba-platform/rest";
import {restServices} from "../../../../cuba/services";
import MaterialContainerComponent, {MaterialType} from "../../../common/materialContainer/MaterialContainerComponent";

@observer
class Courses extends React.Component<WrappedComponentProps & RouteComponentProps> {
  componentDidMount(): void {
    this.reloadData();
  }

  searchProperty: string = 'name';

  @observable courses: Course[];

  @observable coursesConditions: EntityFilter;

  @action setCurrentCourses = (currentCourses: any) => {
    this.courses = currentCourses;
  };

  @action setCoursesConditions = (value: EntityFilter) => {
    this.coursesConditions = value;
  };

  setSingleCondition = (value: Condition | null) => {
    // this.setCoursesConditions({conditions: [value]});
    const conditions = value === null ? [] : [value];
    this.setCoursesConditions({conditions: conditions});
  };

  reloadData = () => {
    restServices.tsadv_LmsService.loadCourses(getCubaREST()!, this.coursesConditions)().then((response: string) => {
      const courses: Course[] = JSON.parse(response);
      this.setCurrentCourses(courses);
    });
  };

  courseClickHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    this.props.history.push("/course/" + e.currentTarget.dataset.id);
  };

  @action onSearch = (value: string, event?: React.ChangeEvent<HTMLInputElement> | React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLInputElement>) => {
    if (value.trim() === '') {
      this.setSingleCondition(null);
      this.reloadData()
    }

    const searchCondition: Condition = {
      property: this.searchProperty,
      operator: 'contains',
      value: value
    };
    this.setSingleCondition(searchCondition);
    this.reloadData();
  };

  render() {
    const BodyComponent = this.courses ? React.createElement(MaterialContainerComponent, {
      materialData: this.courses,
      boxType: BoxType.DEFAULT,
      materialClickHandler: this.courseClickHandler
    }) : React.createElement(LoadingComponent);

    const CoursesBodyComponent = <div className={"courses-container"}>
        <Search placeholder={"Введите название курса"} onSearch={this.onSearch}/>
        {BodyComponent}
      </div>;

    const CoursesComponent = Content(CoursesBodyComponent, {
      headerName: "курсы",
    });
    return <CoursesComponent />;
  }
}

export default injectIntl(withRouter(Courses));