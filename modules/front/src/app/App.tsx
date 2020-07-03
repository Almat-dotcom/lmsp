import * as React from "react";
import "./App.css";

import {Icon, Layout, Menu} from "antd";
import {observer} from "mobx-react";
import Login from "./login/Login";
import Centered from "./common/Centered";
import AppHeader from "./header/AppHeader";
import {NavLink, Route, Switch} from "react-router-dom";
import HomePage from "./home/HomePage";
import {menuItems} from "../routing";
import {
  injectMainStore,
  MainStoreInjected,
  RouteItem,
  SubMenu
} from "@cuba-platform/react";
import {CenteredLoader} from "./CenteredLoader";
import {
  FormattedMessage,
  injectIntl,
  IntlFormatters,
  WrappedComponentProps
} from "react-intl";
import {IMenuItem, topMenu} from "../menu";
import Course from "./content/course/Course";

@injectMainStore
@observer
class AppComponent extends React.Component<MainStoreInjected & WrappedComponentProps> {
  render() {
    const mainStore = this.props.mainStore!;
    const {initialized, locale, loginRequired} = mainStore;

    if (!initialized || !locale) {
      return <CenteredLoader/>;
    }

    if (loginRequired) {
      return (
        <Centered>
          <Login/>
        </Centered>
      );
    }

    const menuIdx = 1;

    return (
      <Layout className="main-layout">
        <Layout.Header>
          <AppHeader/>
        </Layout.Header>
        <Layout>
          {/*<Layout.Sider*/}
          {/*  width={200}*/}
          {/*  breakpoint="sm"*/}
          {/*  collapsedWidth={0}*/}
          {/*  style={{ background: "#fff" }}*/}
          {/*>*/}
          {/*  <Menu mode="inline" style={{ height: "100%", borderRight: 0 }}>*/}
          {/*    <Menu.Item key={menuIdx}>*/}
          {/*      <NavLink to={"/"}>*/}
          {/*        <Icon type="home" />*/}
          {/*        <FormattedMessage id="router.home" />*/}
          {/*      </NavLink>*/}
          {/*    </Menu.Item>*/}
          {/*    {menuItems.map((item, idx) =>*/}
          {/*      menuItem(item, "" + (idx + 1 + menuIdx), this.props.intl)*/}
          {/*    )}*/}
          {/*  </Menu>*/}
          {/*</Layout.Sider>*/}
          <Layout>
            <Layout.Content>
              <Switch>
                <Route exact={true} path="/" component={HomePage}/>
                <Route exact={true} path="/course/:id" component={Course}/>
                {mapToNavigation(topMenu)}
              </Switch>
            </Layout.Content>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}

function mapToNavigation(menuItem: IMenuItem[]): any {
  const navigationList: IMenuItem[] = [];
  collectNavigation(menuItem, navigationList);
  return navigationList.map(el => (<Route key={el.path} path={el.path} component={el.component}/>));
}

function collectNavigation(menuItem: IMenuItem[], allNavigations: IMenuItem[]): void {
  menuItem.forEach(el => {
    if (el.items) {
      collectNavigation(el.items, allNavigations);
    }
    allNavigations.push(el);
  })
}

const App = injectIntl(AppComponent);
export default App;
