import * as React from "react";
import {IMenuItem} from "../../../../menu";
import {injectIntl, WrappedComponentProps} from "react-intl";
import './style.css'
import {injectMainStore} from "@cuba-platform/react";
import {NavLink} from "react-router-dom";

export interface MenuItemProps {
  menuItem: IMenuItem
}

@injectMainStore
class MenuItem extends React.Component<MenuItemProps & WrappedComponentProps> {
  render() {
    return <nav>
      <ul className={"menu-item"} key={this.props.menuItem.id}>
        <li><a>{this.props.intl.formatMessage({
          id: "menu." + this.props.menuItem.caption
        })}</a>
          {this.props.menuItem.items ? <ul>
            {this.props.menuItem.items.map(el => {
              return <NavLink to={el.path}>
                <li key={el.id}>{this.props.intl.formatMessage({
                  id: "menu." + this.props.menuItem.caption + "." + el.caption
                })}</li>
              </NavLink>
            })}
          </ul> : <></>}
        </li>
      </ul>
    </nav>
  }
}

export default injectIntl(MenuItem);