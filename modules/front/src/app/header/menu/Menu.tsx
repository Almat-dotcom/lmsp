import * as React from "react";
import {observable} from "mobx";
import {observer} from "mobx-react";
import MenuItem from "./menuItem/MenuItem";
import {injectMainStore, MainStoreInjected} from "@cuba-platform/react";
import {injectIntl, WrappedComponentProps} from "react-intl";
import {IMenuItem, topMenu} from "../../../menu";
import './menu.css'
import {NavLink} from "react-router-dom";

@injectMainStore
@observer
class Menu extends React.Component<MainStoreInjected & WrappedComponentProps> {
  @observable hoveredElement?: React.Component<IMenuItem>;

  render() {
    return <div className={"menu-container"}>
      <div className={"menu-normal-size"}>
        {topMenu.map(el => {
          return <MenuItem menuItem={el}/>;
        })}
      </div>
      <div className={"menu-small-size"}>
        <div className={"menu-small-size-r"}>
          <nav>
            <ul className={"menu-item"} key={"main"}>
              <li>
                <NavLink to={"/"} key={"main"}>
                  Главная
                </NavLink>
              </li>
            </ul>
          </nav>
          {topMenu.map(el => {
            return <MenuItem menuItem={el}/>;
          })}
          <nav />
        </div>
      </div>
    </div>
  }
}

export default injectIntl(Menu);