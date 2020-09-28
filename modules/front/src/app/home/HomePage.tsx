import * as React from "react";
import MaterialComponent, {BoxType, LogoType} from "../common/materialContainer/material/MaterialComponent";
import LoadingComponent from "../common/loading/LoadingComponent";
import {action, observable} from "mobx";
import {getCubaREST} from "@cuba-platform/react";
import {Course} from "../../cuba/entities/base/tsadv$Course";
import {observer} from "mobx-react";
import {RouteComponentProps} from "react-router";
import {withRouter} from "react-router-dom";
import {restServices} from "../../cuba/services";
import styles from "./style.module.css";
import MaterialContainerComponent from "../common/materialContainer/MaterialContainerComponent";
import {Carousel, Icon} from "antd";
import CSS from "csstype";
import {LmsSliderImage} from "../../cuba/entities/base/tsadv$LmsSliderImage";
import {LmsSliderPosition} from "../../cuba/enums/enums";
import {wrapFileUrl} from "../common/global";

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
  @observable sliderFiles: string[] = [];
  imagesCarousel: Carousel | null;
  readonly elementsPerSlideCount: number = 4;

  componentDidMount(): void {
    restServices.tsadv_LmsService
      .loadCourses(getCubaREST()!, {conditions: []})()
      .then((response: string) => {
        const courses: Course[] = JSON.parse(response);
        this.setCurrentCourses(courses);
      });
    getCubaREST()!.searchEntities(LmsSliderImage.NAME, {
      conditions: [
        {
          property: "slider.position",
          operator: "=",
          value: LmsSliderPosition.HOME
        }
      ]
    }, {view: "lmsSliderImage.with.image"}).then((response: LmsSliderImage[]) => {
      this.setSliderFiles(response.map(sliderImage => wrapFileUrl(sliderImage.image!.id!)));
      this.sliderFiles.forEach(slider => console.log(slider));
    });
  }

  @action setSliderFiles = (value: string[]) => {
    this.sliderFiles = value;
  };

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
    const BodyComponent = this.currentCourses ? React.createElement(MaterialContainerComponent, {
      materialData: this.currentCourses,
      boxType: BoxType.DEFAULT,
      materialClickHandler: this.courseClickHandler
    }) : React.createElement(LoadingComponent);
    const imagesCarouselElements = this.sliderFiles
      ? this.sliderFiles.map((sliderImageSrc) => (
        <div>
          <img className="main-menu-carousel-image" src={sliderImageSrc}/>
        </div>
      ))
      : React.createElement(LoadingComponent);
    // const carouselNextArrow = (
    //   <Icon
    //     type="right"
    //     className="main-carousel-bottom-menu-arrow"
    //     onClick={() => this.imagesCarousel!.next()}
    //   />
    // );
    // const carouselPreviousArrow = (
    //   <Icon
    //     type="left"
    //     className="main-carousel-bottom-menu-arrow"
    //     onClick={() => this.imagesCarousel!.prev()}
    //   />
    // );

    return (
      <div className={""}>
        <div className={styles["content-wrapper"]}>
          <Carousel
            className="main-menu-carousel"
            infinite
            autoplay
            dots
            ref={prop => (this.imagesCarousel = prop)}
          >
            {imagesCarouselElements}
          </Carousel>
          {/*<div className="main-carousel-bottom-menu">*/}
          {/*  {carouselPreviousArrow}*/}
          {/*  {carouselNextArrow}*/}
          {/*</div>*/}
        </div>
        <div className={styles["content-wrapper"]}>{BodyComponent}</div>
      </div>
    );
  }
}

export default withRouter(HomePage);
