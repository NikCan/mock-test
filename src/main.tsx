import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from './app/App';
import './global.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter basename="mock-test">
    <App />
  </BrowserRouter>
);
