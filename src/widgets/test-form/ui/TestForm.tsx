import { useAppStore } from '@/app/model';
import { Question, Test } from '@/shared/types';
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Radio,
  TextField
} from '@mui/material';
import { FC, memo } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import useFormPersist from 'react-hook-form-persist';

interface Props {
  test: Test;
  currentQuestionIndex: number;
}

interface FormValues {
  answers: (number | number[] | string | null)[];
}
export const TestForm: FC<Props> = memo(({ test, currentQuestionIndex }) => {
  const setCurrentQuestionIndex = useAppStore(
    (state) => state.setCurrentQuestionIndex
  );

  const { control, handleSubmit, watch, setValue, reset } = useForm<FormValues>(
    { defaultValues: { answers: Array(test.questions.length).fill(null) } }
  );
  useFormPersist('test-' + test.id, { watch, setValue });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log('Answers:', data.answers);
    reset();
    setCurrentQuestionIndex(test.id, 0);
  };

  const renderQuestion = (question?: Question, index?: number) => {
    if (!question || !index) return null;
    switch (question.type) {
      case 'single-choice':
        return (
          <Box key={question.id}>
            {question.options?.map((option, optionIndex) => (
              <FormControlLabel
                key={optionIndex}
                label={option}
                control={
                  <Controller
                    name={`answers.${index}`}
                    control={control}
                    render={({ field }) => (
                      <Radio
                        color="primary"
                        value={optionIndex}
                        checked={field.value === optionIndex}
                        onChange={() => field.onChange(optionIndex)}
                      />
                    )}
                  />
                }
              />
            ))}
          </Box>
        );

      case 'multiple-choice':
        return (
          <div key={question.id}>
            {question.options?.map((option, optionIndex) => (
              <FormControlLabel
                key={optionIndex}
                label={option}
                control={
                  <Controller
                    name={`answers.${index}`}
                    control={control}
                    render={({ field }) => (
                      <Checkbox
                        color="primary"
                        value={optionIndex}
                        checked={((field.value as number[]) || []).includes(
                          optionIndex
                        )}
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
                  />
                }
              />
            ))}
          </div>
        );

      case 'short-answer':
        return (
          <div key={question.id}>
            <Controller
              name={`answers.${index}`}
              control={control}
              render={({ field }) => (
                <TextField
                  value={field.value || ''}
                  onChange={field.onChange}
                />
              )}
            />
          </div>
        );

      case 'long-answer':
        return (
          <div key={question.id}>
            <Controller
              name={`answers.${index}`}
              control={control}
              render={({ field }) => (
                <TextField
                  multiline
                  value={field.value || ''}
                  onChange={field.onChange}
                />
              )}
            />
          </div>
        );

      default:
        return null;
    }
  };

  const handleNextQuestion = () => {
    setCurrentQuestionIndex(test.id, currentQuestionIndex + 1);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {renderQuestion(
        test.questions[currentQuestionIndex],
        currentQuestionIndex
      )}
      <Box>
        {currentQuestionIndex < test.questions.length ? (
          <Button variant="contained" onClick={handleNextQuestion}>
            Answer
          </Button>
        ) : (
          <Button variant="contained" onClick={handleSubmit(onSubmit)}>
            Complete the test
          </Button>
        )}
      </Box>
    </form>
  );
});

TestForm.displayName = 'TestForm';
