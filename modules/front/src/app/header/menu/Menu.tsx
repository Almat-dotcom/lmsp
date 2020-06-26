import * as React from "react";
import {observable} from "mobx";
import {observer} from "mobx-react";
import MenuItem from "./menuItem/MenuItem";
import {injectMainStore, MainStoreInjected} from "@cuba-platform/react";
import {injectIntl, WrappedComponentProps} from "react-intl";
import {IMenuItem, topMenu} from "../../../menu";
import './menu.css'

@injectMainStore
@observer
class Menu extends React.Component<MainStoreInjected & WrappedComponentProps> {
  @observable hoveredElement?: React.Component<IMenuItem>;

  render() {
    return <div className={"menu-container"}>
      {topMenu.map(el => {
        return <MenuItem menuItem={el}/>;
      })}
    </div>
  }
}

export default injectIntl(Menu);