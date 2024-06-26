import { HomePage, TestPage } from '@/pages';
import { RouteProps } from 'react-router-dom';

export enum AppRoutes {
  MAIN = 'main',
  HOME = 'home',
  TEST = 'test'
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.HOME]: '/home',
  [AppRoutes.TEST]: '/' // + :id
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
  }
};
