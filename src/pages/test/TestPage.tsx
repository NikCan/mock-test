import { useAppStore } from '@/app/model';
import { extractNumberFromPath } from '@/shared/lib';
import { mockTests } from '@/shared/mockData';
import { TestForm, TestStepper, Timer } from '@/widgets';
import { Stack, Typography } from '@mui/material';
import { FC, memo } from 'react';
import { useLocation } from 'react-router-dom';

export const TestPage: FC = memo(() => {
  const location = useLocation();
  const path = extractNumberFromPath(location.pathname);
  const test = mockTests.find((el) => el.id === path);
  const currentQuestionIndex = test?.id
    ? useAppStore((state) => state.currentQuestionIndices[test?.id] ?? 0)
    : 0;
  console.log(currentQuestionIndex);

  const onTimeUp = () => {
    console.log('time up');
  };
  if (!test) {
    return (
      <Stack sx={{ alignItems: 'center' }}>
        <Typography variant="h5">Test not found!</Typography>
      </Stack>
    );
  }

  return (
    <Stack sx={{ gap: 1 }}>
      <Typography variant="h5">Testing</Typography>
      <TestStepper
        total={test.questions.length}
        current={currentQuestionIndex}
      />
      <Stack sx={{ flexDirection: 'row', gap: 1 }}>
        <Typography variant="h6">{test.title}</Typography>
        {test.timeLimit && (
          <Timer
            onTimeUp={onTimeUp}
            duration={test.timeLimit}
            uniqueKey={test.id.toString()}
          />
        )}
      </Stack>
      <Typography fontWeight="bold">
        {test.questions[currentQuestionIndex]?.question}
      </Typography>
      <TestForm test={test} currentQuestionIndex={currentQuestionIndex} />{' '}
    </Stack>
  );
});

TestPage.displayName = 'TestPage';
