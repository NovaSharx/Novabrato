import React from 'react';
import App from './App';
import { Root, createRoot } from 'react-dom/client';
const container: HTMLElement = document.getElementById('root')!;
const root: Root = createRoot(container!);

root.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);
