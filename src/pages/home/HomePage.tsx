import { OpenTestButton } from '@/features';
import { mockTests } from '@/shared/mockData';
import { Stack, Typography } from '@mui/material';
import { FC, memo, useMemo } from 'react';

export const HomePage: FC = memo(() => {
  const tests = useMemo(() => {
    return mockTests.map((test) => {
      return (
        <OpenTestButton testId={test.id} key={test.id}>
          {test.title}
        </OpenTestButton>
      );
    });
  }, [mockTests]);
  return (
    <Stack sx={{ alignItems: 'center', gap: 2 }}>
      <Typography variant="h5">Select the test you need:</Typography>
      <Stack
        sx={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          gap: 1,
          justifyContent: 'center'
        }}
      >
        {tests}
      </Stack>
    </Stack>
  );
});

HomePage.displayName = 'HomePage';
