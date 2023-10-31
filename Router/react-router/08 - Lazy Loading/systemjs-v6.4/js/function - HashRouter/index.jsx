/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React from 'react';
import ReactDOM from 'react-dom';
import { createHashRouter, RouterProvider } from 'react-router-dom';

import Root from './Root';
import Home from './routes/Home';
const Page1 = React.lazy(() => import('./routes/Page1'));
const Page2 = React.lazy(() => import('./routes/Page2'));

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
          <React.Suspense fallback={<div>Loading...</div>}>
            <Page1 />
          </React.Suspense>
        )
      },
      {
        path: 'page2',
        element: (
          <React.Suspense fallback={<div>Loading...</div>}>
            <Page2 />
          </React.Suspense>
        )
      }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);
