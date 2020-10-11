import React from "react";
import { observer } from "mobx-react";
import { action, observable } from "mobx";
import { Spin, Table } from "antd";
import CalendarComponent from "./CalendarComponent";
import Content from "../Content";
import { injectIntl, WrappedComponentProps } from "react-intl";
import { restServices } from "../../../cuba/services";
import { getCubaREST } from "@cuba-platform/react";
import { MatchParams } from "../../common/model/RouteComponentProps";
import { RouteComponentProps } from "react-router-dom";

export interface CalendarEvent {
  name: string;
  duration: Duration;
  courseId: string;
}

export interface Duration {
  years: number;
  months: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface LoadState {
  loading: boolean;
  message?: string;
}

@observer
class CalendarDsComponent extends React.Component<
  RouteComponentProps<MatchParams> & WrappedComponentProps
> {
  @observable monthCalendarModel: Map<number, CalendarEvent[]> | null = null;

  @observable selectedDate: Date = new Date();

  @observable loadState: LoadState = {
    loading: false,
    message: "Пожалуйста подождите, загружаются события"
  };

  componentDidMount(): void {
    this.loadMonthEvents();
  }

  loadMonthEvents = () => {
    this.setLoadState({ loading: true });
    restServices.tsadv_LmsService
      .personMonthEvents(getCubaREST()!, { date: this.selectedDate })()
      .then((response: string) => {
        const temp: Map<Date, CalendarEvent[]> = JSON.parse(response) as Map<
          Date,
          CalendarEvent[]
        >;
        if (Object.keys(temp).length > 0) {
          const monthCalendarModel: Map<number, CalendarEvent[]> = new Map<
            number,
            CalendarEvent[]
          >();
          Object.keys(temp).forEach(t => {
            const date: Date = new Date(t);
            monthCalendarModel.set(date.getTime(), temp[t]);
          });
          this.setMonthCalendarModel(monthCalendarModel);
        }
      })
      .finally(() => {
        this.setLoadState({ loading: false });
      });
  };

  @action setMonthCalendarModel = (
    value: Map<number, CalendarEvent[]> | null
  ) => {
    this.monthCalendarModel = value;
  };

  @action setLoadState = (value: LoadState) => {
    this.loadState = { ...this.loadState, ...value };
  };

  @action setSelectedDate = (value: Date) => {
    this.selectedDate = value;
    this.loadMonthEvents();
  };

  render() {
    const Calendar = (
      <div>
        <Spin spinning={this.loadState.loading} tip={this.loadState.message}>
          <CalendarComponent
            monthCalendarDays={this.monthCalendarModel}
            setCalendarMonth={this.setSelectedDate}
            selectedDate={this.selectedDate}
            browseHistory={this.props.history}
          />
        </Spin>
      </div>
    );

    const ContentComponent = Content(Calendar, {
      headerName: this.props.intl.formatMessage({id: "menu.calendar"})
    });
    return <ContentComponent/>;
  }
}

export default injectIntl(CalendarDsComponent);
