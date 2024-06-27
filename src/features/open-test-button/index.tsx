import { RoutePath } from '@/shared/config';
import { Button } from '@mui/material';
import { FC, memo } from 'react';
import { useNavigate } from 'react-router-dom';

interface Props {
  children: React.ReactNode;
  testId: number;
}
export const OpenTestButton: FC<Props> = memo(({ children, testId }) => {
  const navigate = useNavigate();

  const onOpenTest = () => {
    navigate(`${RoutePath.test}${testId}`);
  };
  return (
    <Button size="large" variant="contained" onClick={onOpenTest}>
      {children}
    </Button>
  );
});

OpenTestButton.displayName = 'OpenTestButton';
