/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { createRoot } from 'react-dom/client';
import { createHashRouter, RouterProvider } from 'react-router-dom';

import Root from './Root.jsx';
import Home from './routes/Home.jsx';
import Page1 from './routes/Page1.jsx';
import Page2 from './routes/Page2.jsx';
import { basename } from 'path';

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
      }
    ]
  }
]);

const root = createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);
