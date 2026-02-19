/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019-2024 Rick Beerendonk !*/

import { lazy, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

import Root from './Root.jsx';
import Home from './routes/Home.jsx';
const Page1 = lazy(() => import('./routes/Page1.jsx'));
const Page2 = lazy(() => import('./routes/Page2.jsx'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'page1',
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Page1 />
          </Suspense>
        )
      },
      {
        path: 'page2',
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Page2 />
          </Suspense>
        )
      }
    ]
  }
]);

const root = createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);
