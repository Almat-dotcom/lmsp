import Courses from "./app/knowledge/courses/Courses";

export interface IMenuItem {
  id: string,
  caption: string,
  path: string,
  items?: Array<IMenuItem>,
  component?: any
}

export const topMenu: Array<IMenuItem> = [];

topMenu.push({
  id: 'myTraining',
  caption: 'myTraining',
  path: '/training',
  items: [{id: 'current', caption: 'current', path: '/training/current'}, {
    id: 'history',
    caption: 'history',
    path: '/training/history'
  }, {
    id: 'tests',
    caption: 'tests',
    path: '/training/tests'
  }]
});

topMenu.push({
  id: 'calendar',
  caption: 'calendar',
  path: '/calendar',
  items: [{id: 'open', caption: 'open', path: '/calendar/open'}]
});

topMenu.push({
  id: 'knowledgeBase',
  caption: 'knowledgeBase',
  path: '/knowledge', items: [{id: 'courses', caption: 'courses', path: '/knowledge/courses', component: Courses}, {
    id: 'books',
    caption: 'books',
    path: '/knowledge/books'
  }, {
    id: 'articles',
    caption: 'articles',
    path: '/knowledge/articles'
  }, {id: 'videos', caption: 'videos', path: '/knowledge/videos'}]
});

topMenu.push({
  id: 'myPage',
  caption: 'myPage',
  path: '/me',
  items: [{id: 'notifications', caption: 'notifications', path: '/me/notifications'}, {
    id: 'password',
    caption: 'password',
    path: '/me/password'
  }, {
    id: 'progress',
    caption: 'progress',
    path: '/me/progress'
  }]
});