import Courses from "./app/content/knowledge/courses/Courses";
import CurrentCourses from "./app/content/training/current/CurrentCourses";

export interface IMenuItem {
  id: string,
  caption: string,
  path: string,
  disabled?: boolean,
  items?: Array<IMenuItem>,
  component?: any
}

export const topMenu: Array<IMenuItem> = [];

topMenu.push({
  id: 'myTraining',
  caption: 'myTraining',
  path: '/training',
  items: [{id: 'current', caption: 'current', path: '/training/current', component: CurrentCourses}, {
    id: 'history',
    caption: 'history',
    path: '/training/history'
  }, {
    id: 'tests',
    caption: 'tests',
    disabled: true,
    path: '/training/tests'
  }]
});

topMenu.push({
  id: 'calendar',
  caption: 'calendar',
  path: '/calendar',
  items: [{id: 'open', caption: 'open', disabled: true, path: '/calendar/open'}]
});

topMenu.push({
  id: 'knowledgeBase',
  caption: 'knowledgeBase',
  path: '/knowledge',
  items: [{id: 'courses', caption: 'courses', path: '/knowledge/courses', component: Courses}, {
    id: 'books',
    caption: 'books',
    disabled: true,
    path: '/knowledge/books'
  }, {
    id: 'articles',
    caption: 'articles',
    disabled: true,
    path: '/knowledge/articles'
  }, {id: 'videos', caption: 'videos', disabled: true, path: '/knowledge/videos'}]
});

topMenu.push({
  id: 'myPage',
  caption: 'myPage',
  path: '/me',
  items: [{id: 'notifications', caption: 'notifications', disabled: true, path: '/me/notifications'}, {
    id: 'password',
    caption: 'password',
    disabled: true, path: '/me/password'
  }, {
    id: 'progress',
    caption: 'progress',
    disabled: true, path: '/me/progress'
  }]
});