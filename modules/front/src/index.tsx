import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./app/App";
// import registerServiceWorker from './registerServiceWorker';
import { CubaAppProvider } from "@cuba-platform/react";

import { BrowserRouter, HashRouter, Route, Router } from "react-router-dom";
import { initializeApp } from "@cuba-platform/rest";
import { CUBA_APP_URL } from "./config";

import "antd/dist/antd.min.css";
import "@cuba-platform/react/dist/index.min.css";
import "./index.css";
import { antdLocaleMapping, messagesMapping } from "./i18n/i18nMappings";
import "moment/locale/ru";

export const cubaREST = initializeApp({
  name: "lmsp",
  apiUrl: CUBA_APP_URL,
  storage: window.localStorage,
  defaultLocale: 'ru'
});

ReactDOM.render(
  <CubaAppProvider
    cubaREST={cubaREST}
    messagesMapping={messagesMapping}
    antdLocaleMapping={antdLocaleMapping}
  >
    <HashRouter>
      <Route component={App} />
    </HashRouter>
  </CubaAppProvider>,
  document.getElementById("wrapper") as HTMLElement
);
// registerServiceWorker();
