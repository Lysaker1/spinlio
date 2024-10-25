import React from 'react';
import { createRoot } from 'react-dom/client';
import { MantineProvider } from '@mantine/core';
import App from './App';
import ErrorBoundary from './components/ErrorBoundary';
import '@mantine/core/styles.css';

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <MantineProvider>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </MantineProvider>
  </React.StrictMode>
);
