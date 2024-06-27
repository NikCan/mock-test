import { StepperItem } from '@/shared/ui';
import { Stack } from '@mui/material';
import { CSSProperties, FC, memo, useMemo } from 'react';

interface Props {
  total: number;
  current: number;
}

export const TestStepper: FC<Props> = memo(({ total, current }) => {
  const items = useMemo(() => {
    return new Array(total).fill(0).map((_, i) => {
      const style: CSSProperties = {
        backgroundColor: i < current ? 'black' : i === current ? 'red' : 'gray',
        opacity: i < current ? 1 : 0.5
      };
      return <StepperItem key={i} style={style} />;
    });
  }, [total, current]);

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
      {items}
    </Stack>
  );
});

TestStepper.displayName = 'Stepper';
