import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import { SnackbarProvider } from 'notistack';
import App from './App';
import i18n from './i18n';

ReactDOM.render(
  <Suspense fallback={<div>Loading ... </div>}>
    <BrowserRouter>
      <I18nextProvider i18n={i18n}>
        <SnackbarProvider maxSnack={3}>
          <App />
        </SnackbarProvider>
      </I18nextProvider>
    </BrowserRouter>
  </Suspense>,
  document.getElementById('root'),
);
