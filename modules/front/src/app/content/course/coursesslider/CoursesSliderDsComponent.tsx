import React from "react";
import {injectIntl, WrappedComponentProps} from "react-intl";
import {RouteComponentProps, withRouter} from "react-router";
import CoursesSlider, {CoursesSliderComponent} from "./CoursesSliderComponent";
import {observer} from "mobx-react";
import {action, observable} from "mobx";
import {restServices} from "../../../../cuba/services";
import {getCubaREST} from "@cuba-platform/react";
import LoadingComponent from "../../../common/loading/LoadingComponent";
import Search from "../../../common/Search";
import {Condition, EntityFilter} from "@cuba-platform/rest";

interface DicCategoryPojo {
  id: string;
  name: string;
}

interface CoursesDsComponentProps {
  showSearch: boolean;
  elementsPerSlide: number;
}

@observer
class CoursesSliderDsComponent extends React.Component<WrappedComponentProps & RouteComponentProps & CoursesDsComponentProps> {

  static defaultProps = {
    showSearch: true,
    elementsPerSlide: 4,
  };

  @observable
  coursesCategories: DicCategoryPojo[] | undefined = undefined;

  @observable
  coursesConditions: EntityFilter = {conditions: []};

  searchProperty: string = "name";

  courseComponents: CoursesSliderComponent[] = [];

  courses: CoursesSliderComponent | null = null;


  @action setCoursesConditions = (value: EntityFilter) => {
    this.coursesConditions = value;
  };

  setSingleCondition = (value: Condition | null) => {
    if (value) {
      this.setCoursesConditions({conditions: [value]});
    } else {
      this.setCoursesConditions({conditions: []});
    }
  };

  @action onSearch = (value: string, event?: React.ChangeEvent<HTMLInputElement> | React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLInputElement>) => {

    for (let courseComponent of this.courseComponents) {
      courseComponent.resetPage();
    }
    if (value.trim() === '') {
      this.setSingleCondition(null);
    } else {
      const searchCondition: Condition = {
        property: this.searchProperty,
        operator: 'contains',
        value: value
      };
      this.setSingleCondition(searchCondition);
    }
    this.updateCategories();
  };

  @action setCategories = (categories: DicCategoryPojo[] | undefined) => {
    this.coursesCategories = categories;
  };

  @action updateCategories = () => {
    this.setCategories(undefined);
    restServices.tsadv_LmsService.loadCourseCategories(getCubaREST()!, this.coursesConditions)()
      .then((response: string) => {
        const categories: DicCategoryPojo[] = JSON.parse(response);
        this.setCategories(categories);
      });
  };

  componentDidMount(): void {
    console.log(this.coursesConditions);
    this.updateCategories();
  }

  render() {
    const BodyComponent = this.coursesCategories ? (<div className={"courses-container"}>
      {this.props.showSearch ? <Search placeholder={"Введите название курса"} onSearch={this.onSearch}/> : <></>}
      {this.coursesCategories.map((category: DicCategoryPojo) => {
        this.courseComponents = [];
        return (<div className={"category-wrapper"}>
          <h1>
            <div className={"category-title"}>{category.name}</div>
          </h1>
          <CoursesSlider ref={component => {
            this.courseComponents.push(component)
          }} categoryId={category.id} coursesConditions={this.coursesConditions} history={this.props.history}
                         elementsPerSlide={this.props.elementsPerSlide}/>
        </div>)
      })}
    </div>) : React.createElement(LoadingComponent);

    return BodyComponent;
  }
}

export default injectIntl(withRouter(CoursesSliderDsComponent))


