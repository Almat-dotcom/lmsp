import * as React from "react";
import MaterialComponent, {BoxType, LogoType} from "../common/materialContainer/material/MaterialComponent";
import LoadingComponent from "../common/loading/LoadingComponent";
import {action, observable} from "mobx";
import {getCubaREST} from "@cuba-platform/react";
import {Course} from "../../cuba/entities/base/tsadv$Course";
import {observer} from "mobx-react";
import {RouteComponentProps} from "react-router";
import {withRouter} from 'react-router-dom'
import {restServices} from "../../cuba/services";
import styles from './style.module.css';
import MaterialContainerComponent from "../common/materialContainer/MaterialContainerComponent";
import {Carousel, Icon} from "antd";
import CSS from "csstype";
import {LmsSliderImage} from "../../cuba/entities/base/tsadv$LmsSliderImage";
import {LmsSliderPosition} from "../../cuba/enums/enums";
import {wrapFileUrl} from "../common/global";
import PaginationLoadParent, {PromiseFunc} from "../common/PaginationLoadParent";

const carouselContentStyle: CSS.Properties = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79"
};

@observer
class HomePage extends PaginationLoadParent<Course, RouteComponentProps> {

  @observable sliderFiles: string[] = [];
  imagesCarousel: Carousel | null;
  readonly elementsPerSlideCount: number = 4;

  componentDidMount(): void {
    super.componentDidMount();
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

  getLoadParams = (): PromiseFunc => {
    return {
      loadFunc: restServices.tsadv_LmsService.loadCourses
    }
  };

  courseClickHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    this.props.history.push("/course/" + e.currentTarget.dataset.id);
  };

  splitCurrentCourses = () => {
    if (!this.loadedData) return React.createElement(LoadingComponent);
    return new Array(
      Math.ceil(this.loadedData.length / this.elementsPerSlideCount)
    )
      .fill(undefined)
      .map(_ => this.loadedData.splice(0, this.elementsPerSlideCount))
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
    const BodyComponent = this.loadedData ? React.createElement(MaterialContainerComponent, {
      materialData: this.loadedData,
      boxType: BoxType.DEFAULT,
      materialClickHandler: this.courseClickHandler,
      loadMoreClickHandler: this.incrementPage,
      hasLoadMore: this.currentPage < this.pageCount
    }) : React.createElement(LoadingComponent);
    const imagesCarouselElements = this.sliderFiles
      ? this.sliderFiles.map((sliderImageSrc) => (
        <div className="main-menu-carousel-image-container">
          <img className="main-menu-carousel-image" src={sliderImageSrc}/>
        </div>
      ))
      : React.createElement(LoadingComponent);
    const carouselNextArrow = (
      <Icon
        type="right"
        className="main-carousel-bottom-menu-arrow"
        onClick={() => this.imagesCarousel!.next()}
      />
    );
    const carouselPreviousArrow = (
      <Icon
        type="left"
        className="main-carousel-bottom-menu-arrow"
        onClick={() => this.imagesCarousel!.prev()}
      />
    );

    return (
      <div>
        <div className={styles["content-wrapper"] + " image-carousel"}>
          <Carousel

            className="main-menu-carousel"
            infinite
            autoplay
            ref={prop => (this.imagesCarousel = prop)}
            dots={false}
          >
            {imagesCarouselElements}

          </Carousel>
          <div className={"carousel-bottom-menu"}>
            <div className="main-carousel-bottom-menu">
              {carouselPreviousArrow}
              {carouselNextArrow}
            </div>
          </div>
        </div>
        <div className={styles["content-wrapper"]}>{BodyComponent}</div>
      </div>
    );
  }
}

export default withRouter(HomePage);
