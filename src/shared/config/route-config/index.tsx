import { HomePage, NotFoundPage, TestPage } from '@/pages';
import { RouteProps } from 'react-router-dom';

export enum AppRoutes {
  MAIN = 'main',
  HOME = 'home',
  TEST = 'test',
  NOT_FOUND = 'notFound'
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.HOME]: '/',
  [AppRoutes.TEST]: '/test/', // + :id
  [AppRoutes.NOT_FOUND]: '*'
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <HomePage />
  },
  [AppRoutes.HOME]: {
    path: RoutePath.home,
    element: <HomePage />
  },
  [AppRoutes.TEST]: {
    path: `${RoutePath.test}:id`,
    element: <TestPage />
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.notFound,
    element: <NotFoundPage />
  }
};
