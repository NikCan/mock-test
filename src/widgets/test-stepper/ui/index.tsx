import { StepperItem } from '@/shared/ui';
import { Stack } from '@mui/material';
import { CSSProperties, FC, memo, useMemo } from 'react';

interface Props {
  total: number;
  current: number;
}

export const TestStepper: FC<Props> = memo(({ total, current }) => {
  return (
    <Stack
      sx={{
        flexDirection: 'row',
        gap: 1,
        flex: 1,
        height: '8px',
        minHeight: '8px'
      }}
    >
      {new Array(total).fill(0).map((_, i) => {
        const style: CSSProperties = useMemo(() => {
          if (i < current) {
            return { backgroundColor: 'black' };
          } else if (i === current) {
            return { backgroundColor: 'red' };
          }
          return { backgroundColor: 'gray', opacity: 0.5 };
        }, [current]);

        return <StepperItem key={i} style={style} />;
      })}
    </Stack>
  );
});

TestStepper.displayName = 'Stepper';
