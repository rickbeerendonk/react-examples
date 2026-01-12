/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { hydrateRoot } from 'react-dom/client';

import App from './App.jsx';

hydrateRoot(document.getElementById('root'), <App />, {
  onRecoverableError(error, errorInfo) {
    console.error('[onRecoverableError error]', error);
    console.log('[onRecoverableError info]', errorInfo);
  }
});
