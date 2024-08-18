/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import { createHashRouter, RouterProvider } from 'react-router-dom';

import Root from './Root.jsx';
import Home from './routes/Home.jsx';
const Page1 = lazy(() => import('./routes/Page1.jsx'));
const Page2 = lazy(() => import('./routes/Page2.jsx'));

const router = createHashRouter([
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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);
