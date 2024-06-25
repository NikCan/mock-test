import { routeConfig } from '@/shared/config';
import { PageLoader } from '@/widgets/page-loader';
import { Suspense, useCallback } from 'react';
import { Route, Routes, RouteProps } from 'react-router-dom';

export function AppRouter() {
  const renderWithWrapper = useCallback((route: RouteProps) => {
    const element = (
      <div className="page-wrapper">
        <Suspense fallback={<PageLoader />}>{route.element}</Suspense>
      </div>
    );

    return <Route element={element} key={route.path} path={route.path} />;
  }, []);

  return <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>;
}
