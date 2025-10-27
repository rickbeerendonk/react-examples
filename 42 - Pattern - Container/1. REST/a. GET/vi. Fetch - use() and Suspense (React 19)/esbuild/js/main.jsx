/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { createRoot } from 'react-dom/client';

import ErrorBoundary from './ErrorBoundary.jsx';
import PostListContainer from './PostListContainer.jsx';

const root = createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundary>
    <PostListContainer />
  </ErrorBoundary>
);
