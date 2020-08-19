import React from "react";
import {Badge, Calendar, Modal} from "antd";
import {CalendarEvent, Duration} from "./CalendarDsComponent";
import moment from "moment";
import './calendar.css'
import {getCubaREST, injectMainStore, MainStoreInjected} from "@cuba-platform/react";
import {injectIntl, WrappedComponentProps} from "react-intl";
import styles from './style.module.css'

export interface CalendarComponentProps {
  monthCalendarDays: Map<number, CalendarEvent[]> | null,
  selectedDate: Date
}

interface Case { //Падеж
  Nominative: string, //Именительный
  Genitive?: string, //Родительный
  Multiple: string, //Во множественном склонении
}

export interface CalendarComponentHandlers {
  setCalendarMonth: (value: Date) => void
}

const durationCasesRu: Map<string, Case> = new Map;
durationCasesRu.set("years", {Genitive: "года", Multiple: "лет", Nominative: "год"});
durationCasesRu.set("months", {Genitive: "месяца", Multiple: "месяцев", Nominative: "месяц"});
durationCasesRu.set("days", {Genitive: "дней", Multiple: "дня", Nominative: "день"});
durationCasesRu.set("hours", {Genitive: "часов", Multiple: "часа", Nominative: "час"});
durationCasesRu.set("minutes", {Genitive: "минут", Multiple: "минуты", Nominative: "минута"});
durationCasesRu.set("seconds", {Genitive: "секунд", Multiple: "секунды", Nominative: "секунда"});


const durationCasesEn: Map<string, Case> = new Map;
durationCasesEn.set("years", {Multiple: "years", Nominative: "year"});
durationCasesEn.set("months", {Multiple: "months", Nominative: "month"});
durationCasesEn.set("days", {Multiple: "days", Nominative: "day"});
durationCasesEn.set("hours", {Multiple: "hours", Nominative: "hour"});
durationCasesEn.set("minutes", {Multiple: "minutes", Nominative: "minute"});
durationCasesEn.set("seconds", {Multiple: "seconds", Nominative: "second"});

const getEvents = (events: CalendarEvent[]) => {
  const twoEvents: CalendarEvent[] = [];
  for (let i = 0; i < (events.length < 2 ? events.length : 2); i++) {
    twoEvents.push(events[i]);
  }

  const badgeColor: string = '#' + (Math.random() * 0xfffff * 1000000).toString(16).slice(0, 6);
  console.log(badgeColor);
  return <ul className={"events"}>
    {twoEvents.map(course => (
      <li key={course.name} title={course.name}>
        <Badge color={badgeColor} text={course.name}/>
      </li>
    ))}
  </ul>
};


@injectMainStore
class CalendarComponent extends React.Component<CalendarComponentProps & CalendarComponentHandlers & MainStoreInjected & WrappedComponentProps> {
  dateCellRender = (value: moment.Moment) => {
    if (this.props.monthCalendarDays && this.props.monthCalendarDays.size > 0) {
      const calendarDayDate: Date = value.toDate();
      calendarDayDate.setHours(0, 0, 0, 0);

      const events: CalendarEvent[] | undefined = this.props.monthCalendarDays.get(calendarDayDate.getTime());
      if (events) {
        return getEvents(events);
      }
    }
    return <></>
  };

  onChangeMonth = (value: moment.Moment) => {
    this.props.setCalendarMonth(value.toDate());
  };

  onChangeDay = (value: moment.Moment) => {
    if (this.props.monthCalendarDays && this.props.monthCalendarDays.size > 0) {
      const calendarDayDate: Date = value.toDate();
      calendarDayDate.setHours(0, 0, 0, 0);

      const events: CalendarEvent[] | undefined = this.props.monthCalendarDays.get(calendarDayDate.getTime());
      if (events) {
        Modal.info({
          title: value.format('D MMMM'),
          content: (
            <div>
              {events.map(e => {
                return <div className={styles["modal-calendar-container"]}>
                  <div>
                    <span
                      className={styles["title"]}>{this.props.intl.formatMessage({id: 'course'})}: </span><span>{e.name}</span>
                  </div>
                  <div>
                    <span
                      className={styles["title"]}>{this.props.intl.formatMessage({id: 'duration'})}:</span><span>{this.parseDurationToString(e.duration)}</span>
                  </div>
                  <br/>
                </div>
              })}
            </div>
          ),
          onOk() {
          }
        });
      }
    }
  };

  render() {
    let m: moment.Moment = moment(this.props.selectedDate.toISOString());
    return <Calendar onSelect={this.onChangeDay} onChange={this.onChangeMonth} dateCellRender={this.dateCellRender}
                     value={m}/>
  }

  parseDurationToString = (duration: Duration): string => {
    let locale: string | undefined = this.props.mainStore!.locale;
    if (!locale) {
      locale = 'ru';
    }
    switch (locale) {
      case "en":
        return this.parseDurationToStringEn(duration);
      default:
        return this.parseDurationToStringRu(duration);
    }
  };

  parseDurationToStringRu = (duration: Duration): string => {
    let durationString: string = "";
    const durationCases: Map<string, Case> = durationCasesRu;
    Object.keys(duration).forEach(k => {
      const value: number = duration[k];
      if (value != 0) {
        durationString = durationString + " " + value;
        switch (true) {
          case (value != 11 && (getDecimal(value / 10) == 0.1)): {
            durationString = durationString + " " + durationCases.get(k)!.Nominative;
            break;
          }
          case (value >= 5 && value <= 20) || (getDecimal(value / 10) > 0.4 || value % 10 == 0): {
            durationString = durationString + " " + durationCases.get(k)!.Genitive;
            break;
          }
          default: {
            durationString = durationString + " " + durationCases.get(k)!.Multiple;
            break;
          }
        }
      }
    });

    return durationString;
  }

  parseDurationToStringEn = (duration: Duration): string => {
    let durationString: string = "";
    const durationCases: Map<string, Case> = durationCasesEn;

    Object.keys(duration).forEach(k => {
      const value: number = duration[k];
      if (value != 0) {
        durationString = durationString + " " + value;
        switch (true) {
          case (value === 1): {
            durationString = durationString + " " + durationCases.get(k)!.Nominative;
            break;
          }
          default: {
            durationString = durationString + " " + durationCases.get(k)!.Multiple;
            break;
          }
        }
      }
    });

    return durationString;
  }
}

const getDecimal = (num: number) => {
  let result;
  const initialNum = Math.abs(num);
  const roundedNum = Math.round(initialNum);

  if (roundedNum > initialNum) {
    result = roundedNum - initialNum - 1;
    result = Math.abs(result);
    result = +result.toFixed(10);
  } else {
    result = initialNum - roundedNum;
    result = +result.toFixed(10);
  }
  return result;
};

export default injectIntl(CalendarComponent);