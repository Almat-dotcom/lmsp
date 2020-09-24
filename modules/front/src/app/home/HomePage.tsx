import * as React from "react";
import WelcomeComponent from "./welcome/WelcomeComponent";
import MaterialComponent, {
  BoxType,
  LogoType
} from "../common/materialContainer/material/MaterialComponent";
import LoadingComponent from "../common/loading/LoadingComponent";
import { action, observable } from "mobx";
import { getCubaREST } from "@cuba-platform/react";
import { Course } from "../../cuba/entities/tsadv/tsadv$Course";
import { observer } from "mobx-react";
import { RouteComponentProps } from "react-router";
import { withRouter } from "react-router-dom";
import { restServices } from "../../cuba/services";
import styles from "./style.module.css";
import MaterialContainerComponent, {
  MaterialType
} from "../common/materialContainer/MaterialContainerComponent";
import { Button, Carousel, Icon } from "antd";
import CSS from "csstype";
const carouselContentStyle: CSS.Properties = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79"
};

@observer
class HomePage extends React.Component<RouteComponentProps> {
  @observable currentCourses: Course[];

  coursesCarousel: Carousel | null;
  readonly elementsPerSlideCount: number = 4;

  componentDidMount(): void {
    restServices.tsadv_LmsService
      .loadCourses(getCubaREST()!, { conditions: [] })()
      .then((response: string) => {
        const courses: Course[] = JSON.parse(response);
        this.setCurrentCourses(courses);
      });
  }

  @action setCurrentCourses = (currentCourses: any) => {
    this.currentCourses = currentCourses;
  };

  courseClickHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    this.props.history.push("/course/" + e.currentTarget.dataset.id);
  };

  splitCurrentCourses = () => {
    if (!this.currentCourses) return React.createElement(LoadingComponent);
    return new Array(
      Math.ceil(this.currentCourses.length / this.elementsPerSlideCount)
    )
      .fill(undefined)
      .map(_ => this.currentCourses.splice(0, this.elementsPerSlideCount))
      .map((coursesGroup: Course[]) => (
        <div>
          {coursesGroup.map((material: Course) => (
            <MaterialComponent
              id={material.id!}
              name={material.name!}
              logo={material.logo}
              Footer={<></>}
              logoType={LogoType.BASE64}
              boxType={BoxType.DEFAULT}
              materialClickHandler={this.courseClickHandler}
            />
          ))}
        </div>
      ));
  };
  render() {
    const BodyComponent = this.currentCourses
      ? React.createElement(MaterialContainerComponent, {
          materialData: this.currentCourses,
          boxType: BoxType.DEFAULT,
          materialClickHandler: this.courseClickHandler
        })
      : React.createElement(LoadingComponent);
    const carouselElements = this.currentCourses
      ? this.currentCourses.map((material: Course) => (
          <MaterialComponent
            id={material.id!}
            name={material.name!}
            logo={material.logo}
            Footer={<></>}
            logoType={LogoType.BASE64}
            boxType={BoxType.DEFAULT}
            materialClickHandler={this.courseClickHandler}
          />
        ))
      : React.createElement(LoadingComponent);

    const carouselNextArrow = (
      <Icon
        type="right"
        className="main-carousel-bottom-menu-arrow"
        onClick={() => this.coursesCarousel!.next()}
      />
    );
    const carouselPreviousArrow = (
      <Icon
        type="left"
        className="main-carousel-bottom-menu-arrow"
        onClick={() => this.coursesCarousel!.prev()}
      />
    );
    return (
      <div className={""}>
        <div className={styles["content-wrapper"]}>
          <Carousel
            className="main-menu-carousel"
            dotsClass="main-menu-carousel-dot"
            infinite
            autoplay={false}
            dots={false}
            ref={prop => (this.coursesCarousel = prop)}
          >
            {this.splitCurrentCourses()}
          </Carousel>
          <div className="main-carousel-bottom-menu">
            {carouselPreviousArrow}
            {carouselNextArrow}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(HomePage);
