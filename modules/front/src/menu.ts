import CurrentCourses from "./app/content/training/current/CurrentCourses";
import HistoryComponent from "./app/content/training/history/HistoryComponent";
import VideosComponent from "./app/content/knowledge/video/VideosComponent";
import BooksComponent from "./app/content/knowledge/books/BooksComponent";
import ArticlesComponent from "./app/content/knowledge/articles/ArticlesComponent";
import TestsComponent from "./app/content/course/tests/TestsComponent";
import LinkMenuComponent from "./app/content/course/links/LinkMenuComponent";
import {links} from "./links";
import MyProgressDsComponent from "./app/content/mypage/progress/MyProgressDsComponent";
import CalendarDsComponent from "./app/content/calendar/CalendarDsComponent";
import NotificationsDsComponent from "./app/content/mypage/notifications/NotificationsDsComponent";
import PasswordComponent from "./app/content/mypage/password/PasswordDsComponent";
import CoursesComponent from "./app/content/knowledge/courses/CoursesComponent";

export interface IMenuItem {
  id: string,
  caption: string,
  path?: string,
  disabled?: boolean,
  link?: string,
  items?: Array<IMenuItem>,
  component?: any
}

export const topMenu: Array<IMenuItem> = [];

topMenu.push({
  id: 'myTraining',
  caption: 'myTraining',
  path: '/training',
  items: [
    {
      id: 'current',
      caption: 'current',
      path: '/training/current',
      component: CurrentCourses
    },
    {
      id: 'history',
      caption: 'history',
      path: '/training/history',
      component: HistoryComponent
    }, {
      id: 'tests',
      caption: 'tests',
      path: '/training/tests',
      component: TestsComponent
    }, {
      id: 'wikium',
      caption: 'wikium',
      link: links.wikium,
      component: LinkMenuComponent
    }, {
      id: 'library',
      caption: 'library',
      link: links.library,
      component: LinkMenuComponent
    }]
});

topMenu.push({
  id: 'calendar',
  caption: 'calendar',
  path: '/calendar',
  component: CalendarDsComponent
});

topMenu.push({
  id: 'knowledgeBase',
  caption: 'knowledgeBase',
  path: '/knowledge',
  items: [
    {
      id: 'courses',
      caption: 'courses',
      path: '/knowledge/courses',
      component: CoursesComponent
    },
    {
      id: 'books',
      caption: 'books',
      path: '/knowledge/books',
      component: BooksComponent
    }, {
      id: 'articles',
      caption: 'articles',
      path: '/knowledge/articles',
      component: ArticlesComponent
    },
    {
      id: 'videos',
      caption: 'videos',
      path: '/knowledge/videos',
      component: VideosComponent
    }]
});

topMenu.push({
  id: 'myPage',
  caption: 'myPage',
  path: '/me',
  items: [
    {
      id: 'notifications',
      caption: 'notifications',
      path: '/me/notifications',
      component: NotificationsDsComponent
    },
    {
      id: 'password',
      caption: 'password',
      path: '/me/password',
      component: PasswordComponent
    },
    {
      id: 'progress',
      caption: 'progress',
      path: '/me/progress',
      component: MyProgressDsComponent
    }]
});