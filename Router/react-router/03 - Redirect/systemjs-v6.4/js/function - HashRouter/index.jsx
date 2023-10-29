/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React from 'react';
import ReactDOM from 'react-dom';
import { createHashRouter, RouterProvider, Navigate } from 'react-router-dom';

import Root from './Root';
import Home from './routes/Home';
import Page1 from './routes/Page1';
import Page2 from './routes/Page2';

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
        element: <Page1 />
      },
      {
        path: 'page2',
        element: <Page2 />
      },
      {
        path: 'oldpage2/*',
        // Prefer handling this on the server with HTTP code 301 (or 308)
        element: <Navigate replace to="/page2" />
      }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);
