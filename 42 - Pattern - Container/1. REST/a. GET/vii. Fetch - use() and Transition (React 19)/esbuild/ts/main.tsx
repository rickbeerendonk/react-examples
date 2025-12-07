/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { Suspense } from 'react';
import { createRoot } from 'react-dom/client';

import ErrorBoundary from './ErrorBoundary.tsx';
import Fetching from './Fetching.tsx';
import PostListContainer from './PostListContainer.tsx';

const root = createRoot(document.getElementById('root') as Element);
root.render(
  <ErrorBoundary>
    <Suspense fallback={<Fetching />}>
      <PostListContainer />
    </Suspense>
  </ErrorBoundary>
);
