import { CircularProgress, Stack } from '@mui/material';
import { FC, memo } from 'react';

export const PageLoader: FC = memo(() => {
  return (
    <Stack
      sx={{
        alignItems: 'center',
        justifyContent: 'center',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
      }}
    >
      <CircularProgress />
    </Stack>
  );
});
PageLoader.displayName = 'PageLoader';
