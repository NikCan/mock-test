import { Stack, Typography } from '@mui/material';
import { FC, memo } from 'react';

export const NotFoundPage: FC = memo(() => {
  return (
    <Stack sx={{ alignItems: 'center' }}>
      <Typography variant="h5">Page not found!</Typography>
    </Stack>
  );
});

NotFoundPage.displayName = 'NotFoundPage';
