/*! European Union Public License version 1.2 !*/
/*! Copyright © 2024 Rick Beerendonk          !*/

import { createRoot } from 'react-dom/client';

import App from './App.jsx';
import ErrorBoundary from './ErrorBoundary.jsx';

const root = createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);
