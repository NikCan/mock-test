import { OpenTestButton } from '@/features';
import { mockTests } from '@/shared/mock-data';
import { Stack, Typography } from '@mui/material';
import { FC, memo, useMemo } from 'react';

export const HomePage: FC = memo(() => {
  const testButtons = useMemo(() => {
    return mockTests.map((test) => {
      return (
        <OpenTestButton key={test.id} testId={test.id}>
          <Typography noWrap textOverflow={'ellipsis'}>
            {test.title}
          </Typography>
        </OpenTestButton>
      );
    });
  }, []);

  return (
    <Stack sx={{ gap: 3, alignItems: 'flex-start' }}>
      <Typography variant="h5">Select the test you need:</Typography>
      <Stack sx={{ gap: 2 }}>{testButtons}</Stack>
    </Stack>
  );
});

HomePage.displayName = 'HomePage';
