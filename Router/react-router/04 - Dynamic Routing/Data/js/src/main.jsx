/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019-2024 Rick Beerendonk !*/

import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

import Root from './Root.jsx';
import Home from './routes/Home.jsx';
import Page from './routes/Page.jsx';

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
        path: 'page/:id',
        element: <Page />
      }
    ]
  }
]);

const root = createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);
