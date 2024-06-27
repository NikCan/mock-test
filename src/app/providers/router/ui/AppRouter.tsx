import { routeConfig } from '@/shared/config';
import { PageLoader } from '@/widgets/page-loader';
import { Box } from '@mui/material';
import { Suspense, useCallback } from 'react';
import { Route, RouteProps, Routes } from 'react-router-dom';

export function AppRouter() {
  const renderWithWrapper = useCallback((route: RouteProps) => {
    const element = (
      <Box sx={{ p: { xs: 1, md: 4 } }}>
        <Suspense fallback={<PageLoader />}>{route.element}</Suspense>
      </Box>
    );

    return <Route element={element} key={route.path} path={route.path} />;
  }, []);

  return <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>;
}
