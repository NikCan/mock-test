import { HomePage } from '@/pages';
import { RouteProps } from 'react-router-dom';

export enum AppRoutes {
  MAIN = 'main',
  HOME = 'home'
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.HOME]: '/home'
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <HomePage />
  },
  [AppRoutes.HOME]: {
    path: RoutePath.home,
    element: <HomePage />
  }
};
