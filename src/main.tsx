import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.scss'
import '@radix-ui/themes/styles.css';
import AppRoutes from './app/routes/AppRoutes';
import { BrowserRouter } from 'react-router-dom';
import { store } from './app/store/store'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
