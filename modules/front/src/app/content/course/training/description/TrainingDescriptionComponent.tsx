import React from "react";
import {Course} from "../../../../../cuba/entities/base/tsadv$Course";
import {injectIntl, WrappedComponentProps} from "react-intl";
import styles from './description.module.css';
import {action, observable} from "mobx";
import {observer} from "mobx-react";
import {descriptionItems} from "./descriptionItems";

interface TrainingComponentProps {
  course: Course
}

interface Menu {
  id: string,
  name: string,
}

@observer
class TrainingDescriptionComponent extends React.Component<TrainingComponentProps & WrappedComponentProps> {
  menuItems: Menu[] = [{
    id: 'description',
    name: this.props.intl.formatMessage({id: "description"})
  }, {
    id: 'author',
    name: this.props.intl.formatMessage({id: "course.author"})
  }];

  @observable selectedLi: HTMLLIElement | null = null;

  @observable selectedMenuItemId: string | null = null;

  @action setSelectedMenuItemId = (value: string) => {
    this.selectedMenuItemId = value;
  };

  @action setSelectedLi = (value: HTMLLIElement) => {
    this.selectedLi = value;
  };

  liClickHandler = (e: React.MouseEvent<HTMLLIElement>) => {
    if (this.selectedLi) {
      this.selectedLi.classList.toggle(styles["active"]);
    }
    e.currentTarget.classList.toggle(styles["active"]);
    this.setSelectedLi(e.currentTarget);

    const menuItemId: string = e.currentTarget.dataset['id']!;
    if (menuItemId !== this.selectedMenuItemId) {
      this.setSelectedMenuItemId(menuItemId);
    }
  };

  render() {
    const {course} = this.props;

    return <div className={styles["section-training-container"]}>
      <div className={styles["section-training-description-menu"]}>
        <ul>
          {this.menuItems.map(menuItem => <li data-id={menuItem.id}
                                              onClick={this.liClickHandler}>{menuItem.name}</li>)}
        </ul>
      </div>
      <div>
        {this.selectedMenuItemId ? React.createElement(descriptionItems.get(this.selectedMenuItemId), {course}) : <></>}
      </div>
      <div/>
    </div>
  }
}

export default injectIntl(TrainingDescriptionComponent);