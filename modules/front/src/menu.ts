import Courses from "./app/content/knowledge/courses/Courses";
import CurrentCourses from "./app/content/training/current/CurrentCourses";
import HistoryComponent from "./app/content/training/history/HistoryComponent";
import VideosComponent from "./app/content/knowledge/video/VideosComponent";
import BooksComponent from "./app/content/knowledge/books/BooksComponent";
import ArticlesComponent from "./app/content/knowledge/articles/ArticlesComponent";
import TestsComponent from "./app/content/course/tests/TestsComponent";
import LinkMenuComponent from "./app/content/course/links/LinkMenuComponent";
import {links} from "./links";

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
      id: 'tests',
      caption: 'smartreading',
      link: links.smartReading,
      component: LinkMenuComponent
    }]
});

topMenu.push({
  id: 'calendar',
  caption: 'calendar',
  path: '/calendar',
  items: [
    {
      id: 'open',
      caption: 'open',
      disabled: true,
      path: '/calendar/open'
    }
  ]
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
      component: Courses
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
      disabled: true,
      path: '/me/notifications'
    },
    {
      id: 'password',
      caption: 'password',
      disabled: true,
      path: '/me/password'
    },
    {
      id: 'progress',
      caption: 'progress',
      disabled: true,
      path: '/me/progress'
    }]
});