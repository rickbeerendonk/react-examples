/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { createRoot } from 'react-dom/client';
import { createHashRouter, RouterProvider } from 'react-router-dom';

import Root from './Root.jsx';
import Home from './routes/Home.jsx';
import Page from './routes/Page.jsx';

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
        path: 'page/:id',
        element: <Page />
      }
    ]
  }
]);

const root = createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);
