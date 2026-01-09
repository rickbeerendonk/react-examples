/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { createRoot } from 'react-dom/client';

import ErrorBoundary from './ErrorBoundary.jsx';
import GreetingEditor from './GreetingEditor.jsx';
import Other from './Other.jsx';
import './oblicum.css';

const root = createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundary>
    <Other>
      <GreetingEditor />
    </Other>
  </ErrorBoundary>
);
