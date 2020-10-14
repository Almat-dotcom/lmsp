import React from 'react';
import {MaterialData} from "./materialContainer/MaterialContainerComponent";
import {CubaApp, FetchOptions} from "@cuba-platform/rest";
import {getCubaREST} from "@cuba-platform/react";
import {action, observable} from "mobx";

export interface PromiseFunc {
  loadParams?: Object,
  fetchOpts?: FetchOptions,
  loadFunc: (cubaApp: CubaApp, params: {}, fetchOpts?: FetchOptions) => () => Promise<any>
}

export interface LoadDataParentHandlers {
  getLoadParams: () => PromiseFunc
}

export type PageWithData = { pageCount: number, data: any }

abstract class PaginationLoadParent<T extends MaterialData, K> extends React.Component<K> implements LoadDataParentHandlers {

  currentPage: number;

  pageCount: number;

  @observable loadedData: T[] = [];

  componentDidMount(): void {
    this.loadWithPage();
  }

  incrementPage = () => {
    this.currentPage++;
    this.load();
  };

  @action resetLoadedPage = () => {
    this.loadedData = [];
  };

  @action resetPage = () => {
    this.resetLoadedPage();
    this.currentPage = 1;
  };


  getLoadMethod = (): Promise<any> => {
    const {loadFunc, loadParams, fetchOpts} = this.getLoadParams();
    return loadFunc(getCubaREST()!, {...loadParams, pageNumber: this.currentPage}, fetchOpts)();
  };

  getPureLoadMethod = () => {
    const {loadFunc, loadParams, fetchOpts} = this.getLoadParams();
    return loadFunc(getCubaREST()!, {...loadParams}, fetchOpts)();
  };

  load = () => {
    this.getLoadMethod().then((response: string) => {
      const parsedResponseData: T[] = this.parseResponseToData(response);
      this.addLoadedData(parsedResponseData);
    })
  };

  loadWithPage = () => {
    this.getLoadMethod().then((response: string) => {
      const parsedResponseData: PageWithData = this.parsePageResponseToData(response);
      this.currentPage = 1;
      this.pageCount = parsedResponseData.pageCount;
      this.addLoadedData(parsedResponseData.data);
    })
  };

  @action addLoadedData = (value: T[]) => {
    const temp = [...this.loadedData];
    temp.push(...value);
    this.loadedData = temp;
  };

  @action setLoadedData = (value: T[]) => {
    this.loadedData = value;
  };

  parsePageResponseToData = (response: string): PageWithData => {
    return JSON.parse(response);
  };

  parseResponseToData = (response: string): any => {
    return JSON.parse(response);
  };

  abstract getLoadParams: () => PromiseFunc;
}

export default PaginationLoadParent;