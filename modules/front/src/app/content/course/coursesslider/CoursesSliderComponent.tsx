import React from "react";
import {observer} from "mobx-react";
import {Course} from "../../../../cuba/entities/base/tsadv$Course";
import {injectIntl, WrappedComponentProps} from "react-intl";
import LoadingComponent from "../../../common/loading/LoadingComponent";
import MaterialComponent, {BoxType, LogoType} from "../../../common/materialContainer/material/MaterialComponent";
import {EntityFilter} from "@cuba-platform/rest";
import {restServices} from "../../../../cuba/services";
import PaginationLoadParent, {PromiseFunc} from "../../../common/PaginationLoadParent";
import {Carousel, Icon} from "antd";
import {History} from "history";

export interface CoursesProps {
  elementsPerSlide: number;
  categoryId: string | null;
  coursesConditions: EntityFilter | null;
  history: History;
}

@observer
export class CoursesSliderComponent extends PaginationLoadParent<Course, WrappedComponentProps & CoursesProps> {
  currentCarouselPage: number = 1;

  coursesCarousel: Carousel | null = null;

  carouselComponent: JSX.Element[] | undefined = undefined;

  componentDidUpdate() {
    console.log("MOVE");
    this.coursesCarousel!.goTo(this.currentCarouselPage, false);
  };

  getLoadParams = (): PromiseFunc => {
    let loadParams;
    loadParams = {
      categoryId: this.props.categoryId,
      elementsPerPage: this.props.elementsPerSlide,
      ...this.props.coursesConditions
    };

    return {
      loadFunc: restServices.tsadv_LmsService.loadCourses,
      loadParams: loadParams
    };
  };

  courseClickHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    this.props.history.push("/course/" + e.currentTarget.dataset.id);
  };

  splitCourses = (data: Course[]): JSX.Element[] => {
    let dataClone = [...data];
    return new Array(
      Math.ceil(dataClone.length / this.props.elementsPerSlide)
    )
      .fill(undefined)
      .map(_ => {
        return dataClone.splice(0, this.props.elementsPerSlide);
      })
      .map((coursesGroup: Course[], index) => (
        <div className={"carousel-elements-group"} key={`courses${index}`}>
          {coursesGroup.map((material: Course) => (
            <MaterialComponent
              id={material.id!}
              name={material.name!}
              logo={material.logo}
              Footer={<></>}
              logoType={LogoType.BASE64}
              boxType={BoxType.DEFAULT}
              materialClickHandler={this.courseClickHandler}/>
          ))}
        </div>
      ));
  };

  render() {
    const carouselNextArrow = (
      <Icon
        type="right"
        className="main-carousel-bottom-menu-arrow"
        onClick={() => {
          if (!this.coursesCarousel)
            return;
          if (this.currentCarouselPage < this.pageCount) {
            ++this.currentCarouselPage;
            if (this.currentCarouselPage - 1 == this.currentPage) {
              this.incrementPage();
            } else {
              this.coursesCarousel.next();
            }
          }
        }}
      />
    );
    const carouselPreviousArrow =
      <Icon
        type="left"
        className="main-carousel-bottom-menu-arrow"
        onClick={() => {
          if (this.currentCarouselPage > 1) {
            this.coursesCarousel!.prev();
            this.currentCarouselPage--;
          }
        }}
      />;


    const CoursesBodyComponent = this.loadedData && this.loadedData.length !== 0 ? (<div className={"items-carousel"}>
      <Carousel ref={prop => (this.coursesCarousel = prop)}
                dots={false} infinite={false}
                initialSlide={this.currentCarouselPage == 1 ? this.currentCarouselPage - 1 : this.currentCarouselPage - 2}>
        {this.splitCourses(this.loadedData)}
      </Carousel>
      <div className={"carousel-bottom-menu"}>
        <div className="main-carousel-bottom-menu courses">
          {carouselPreviousArrow}
          {carouselNextArrow}
        </div>
      </div>
    </div>) : React.createElement(LoadingComponent);

    return CoursesBodyComponent;
  }
}

export default injectIntl(CoursesSliderComponent, {forwardRef: true});