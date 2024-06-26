import { AppRouter } from './providers';
import '@/shared/styles/common.css';

export const App = () => {
  return (
    <div className="app">
      <AppRouter />
    </div>
  );
};
