import * as React from "react";
import LoadingComponent from "../common/loading/LoadingComponent";
import {action, observable} from "mobx";
import {getCubaREST} from "@cuba-platform/react";
import {Course} from "../../cuba/entities/base/tsadv$Course";
import {observer} from "mobx-react";
import {RouteComponentProps} from "react-router";
import {withRouter} from 'react-router-dom'
import {restServices} from "../../cuba/services";
import styles from './style.module.css';
import {Carousel, Icon} from "antd";
import CSS from "csstype";
import {LmsSliderImage} from "../../cuba/entities/base/tsadv$LmsSliderImage";
import {LmsSliderPosition} from "../../cuba/enums/enums";
import {wrapFileUrl} from "../common/global";
import PaginationLoadParent, {PromiseFunc} from "../common/PaginationLoadParent";
import CoursesSliderDsComponent from "../content/course/coursesslider/CoursesSliderDsComponent";

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
  elementsPerPageCount: number = 8;
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
    });
  }

  @action setSliderFiles = (value: string[]) => {
    this.sliderFiles = value;
  };

  getLoadParams = (): PromiseFunc => {
    return {
      loadFunc: restServices.tsadv_LmsService.loadCourses,
      loadParams: {
        conditions: null,
        categoryId: null,
        elementsPerPage: this.elementsPerPageCount
      }
    }

  };

  courseClickHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    this.props.history.push("/course/" + e.currentTarget.dataset.id);
  };

  render() {
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
      <div className={styles["content-wrapper"]}>
        <div className={"items-carousel bordered"}>
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
        <div className={"courses-main-container"}><CoursesSliderDsComponent showSearch={false} elementsPerSlide={6}/>
        </div>
      </div>

    );
  }
}

export default withRouter(HomePage);
