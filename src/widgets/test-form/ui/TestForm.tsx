import { useAppStore } from '@/app/model';
import { RoutePath, Storage } from '@/shared/config';
import { Test } from '@/shared/types';
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Radio,
  Stack,
  TextField,
  Typography
} from '@mui/material';
import { FC, memo, useMemo, useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import useFormPersist from 'react-hook-form-persist';
import { useNavigate } from 'react-router-dom';

interface Props {
  test: Test;
  currentQuestionIndex: number;
  timeIsOver: boolean;
}

interface FormValues {
  answers: (number | number[] | string | null)[];
}
export const TestForm: FC<Props> = memo(
  ({ test, currentQuestionIndex, timeIsOver }) => {
    const navigate = useNavigate();
    const setCurrentQuestionIndex = useAppStore(
      (state) => state.setCurrentQuestionIndex
    );
    const defaultValues = { answers: Array(test.questions.length).fill(null) };
    const { control, handleSubmit, watch, setValue, reset } =
      useForm<FormValues>({ defaultValues });
    useFormPersist('test-' + test.id, { watch, setValue });
    const [isLoading, setIsLoading] = useState(false);

    const onSubmit: SubmitHandler<FormValues> = (data) => {
      console.log('Answers:', data.answers);
      setIsLoading(true);
      /** reset is async in fact */
      reset();
      setTimeout(() => {
        navigate(RoutePath.home);
        setCurrentQuestionIndex(test.id, 0);
        localStorage.removeItem(`${Storage.START_TIME}_${test.id}`);
        setIsLoading(false);
      });
    };

    const onNextQuestion = () => {
      setCurrentQuestionIndex(test.id, currentQuestionIndex + 1);
    };

    const renderAnswer = useMemo(() => {
      const index = currentQuestionIndex;
      const question = test.questions[currentQuestionIndex];

      if (!question) return null;
      switch (question.type) {
        case 'single-choice':
        case 'multiple-choice':
          return (
            <Stack key={question.id} sx={{ minHeight: 168 }}>
              {question.options?.map((option, optionIndex) => (
                <FormControlLabel
                  control={
                    <Controller
                      control={control}
                      name={`answers.${index}`}
                      render={({ field }) => (
                        <>
                          {question.type === 'single-choice' ? (
                            <Radio
                              checked={field.value === optionIndex}
                              value={optionIndex}
                              onChange={() => field.onChange(optionIndex)}
                            />
                          ) : (
                            <Checkbox
                              checked={(
                                (field.value as number[]) || []
                              ).includes(optionIndex)}
                              value={optionIndex}
                              onChange={(e) => {
                                const isChecked = e.target.checked;
                                const newValue = isChecked
                                  ? [
                                      ...((field.value as number[]) || []),
                                      optionIndex
                                    ]
                                  : ((field.value as number[]) || []).filter(
                                      (idx) => idx !== optionIndex
                                    );
                                field.onChange(newValue);
                              }}
                            />
                          )}
                        </>
                      )}
                    />
                  }
                  key={optionIndex}
                  label={option}
                />
              ))}
            </Stack>
          );

        case 'long-answer':
        case 'short-answer':
          return (
            <Box key={question.id} sx={{ minHeight: 168 }}>
              <Controller
                control={control}
                name={`answers.${index}`}
                render={({ field }) => (
                  <TextField
                    fullWidth
                    minRows={4}
                    multiline={question.type === 'long-answer'}
                    value={field.value ?? ''}
                    onChange={field.onChange}
                  />
                )}
              />
            </Box>
          );

        default:
          return null;
      }
    }, [currentQuestionIndex, test, control]);

    if (timeIsOver)
      return (
        <Stack sx={{ gap: 1, alignItems: 'center' }}>
          <Typography variant="h5">Time is over!</Typography>
          <Box>
            <Button variant="contained" onClick={handleSubmit(onSubmit)}>
              Complete the test
            </Button>
          </Box>
        </Stack>
      );

    if (currentQuestionIndex < test.questions.length)
      return (
        <Stack sx={{ gap: 1 }}>
          <Typography fontWeight="bold">
            {test.questions[currentQuestionIndex]?.question}
          </Typography>
          {renderAnswer}
          <Box>
            <Button variant="contained" onClick={onNextQuestion}>
              Answer
            </Button>
          </Box>
        </Stack>
      );

    return (
      <form>
        <Stack sx={{ gap: 1, alignItems: 'center' }}>
          <Typography variant="h5">The end of test</Typography>
          <Box>
            <Button
              disabled={isLoading}
              variant="contained"
              onClick={handleSubmit(onSubmit)}
            >
              Complete the test
            </Button>
          </Box>
        </Stack>
      </form>
    );
  }
);

TestForm.displayName = 'TestForm';
