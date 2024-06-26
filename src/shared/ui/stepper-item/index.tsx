import { Box } from '@mui/material';
import { CSSProperties, FC, memo } from 'react';

interface Props {
  style?: CSSProperties;
  disabled?: boolean;
  onClick?: () => void;
}
export const StepperItem: FC<Props> = memo(
  ({ disabled = true, onClick, style }) => {
    return (
      <Box
        sx={{
          flex: 1,
          cursor: disabled ? 'auto' : 'pointer',
          ...style
        }}
        onClick={disabled ? undefined : onClick}
      />
    );
  }
);

StepperItem.displayName = 'StepperItem';
