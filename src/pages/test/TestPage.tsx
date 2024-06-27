import { useAppStore } from '@/app/model';
import { Storage } from '@/shared/config';
import { calculateTimeLeft, extractNumberFromPath } from '@/shared/lib';
import { mockTests } from '@/shared/mock-data';
import { TestForm, TestStepper, Timer } from '@/widgets';
import { Paper, Stack, Typography } from '@mui/material';
import { FC, memo, useCallback, useState } from 'react';
import { useLocation } from 'react-router-dom';

export const TestPage: FC = memo(() => {
  const location = useLocation();
  const path = extractNumberFromPath(location.pathname);
  const test = mockTests.find((el) => el.id === path);
  const currentQuestionIndex = useAppStore(
    (state) => state.currentQuestionIndices[test?.id ?? 0] ?? 0
  );
  const startTimeKey = `${Storage.START_TIME}_${test?.id}`;
  const startTime = localStorage.getItem(startTimeKey);
  const [timeIsOver, setTimeIsOver] = useState(() => {
    return startTime && test?.timeLimit
      ? calculateTimeLeft(startTime, test.timeLimit) <= 0
      : false;
  });

  const onTimeUp = useCallback(() => {
    setTimeIsOver(true);
  }, []);

  if (!test) {
    return (
      <Stack sx={{ alignItems: 'center' }}>
        <Typography variant="h5">Test not found!</Typography>
      </Stack>
    );
  }

  return (
    <Paper sx={{ p: 2, maxWidth: 1200 }}>
      <Stack sx={{ gap: 2 }}>
        <Typography variant="h5">Testing</Typography>
        <TestStepper
          current={currentQuestionIndex}
          total={test.questions.length}
        />
        <Stack sx={{ flexDirection: 'row', gap: 1, alignItems: 'flex-start' }}>
          <Typography variant="h6">{test.title}</Typography>
          {test.timeLimit && (
            <Timer
              duration={test.timeLimit}
              uniqueKey={startTimeKey}
              onTimeUp={onTimeUp}
            />
          )}
        </Stack>
        <TestForm
          currentQuestionIndex={currentQuestionIndex}
          test={test}
          timeIsOver={timeIsOver}
        />
      </Stack>
    </Paper>
  );
});

TestPage.displayName = 'TestPage';
