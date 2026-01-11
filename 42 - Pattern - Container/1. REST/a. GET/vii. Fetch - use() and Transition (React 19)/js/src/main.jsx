/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { Suspense } from 'react';
import { createRoot } from 'react-dom/client';

import ErrorBoundary from './ErrorBoundary.jsx';
import Fetching from './Fetching.jsx';
import PostListContainer from './PostListContainer.jsx';
import './oblicum.css';

const root = createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundary>
    <Suspense fallback={<Fetching />}>
      <PostListContainer />
    </Suspense>
  </ErrorBoundary>
);
