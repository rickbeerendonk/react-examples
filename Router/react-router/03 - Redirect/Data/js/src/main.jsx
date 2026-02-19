/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019-2024 Rick Beerendonk !*/

import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  Navigate
} from 'react-router-dom';
import './index.css';

import Root from './Root.jsx';
import Home from './routes/Home.jsx';
import Page1 from './routes/Page1.jsx';
import Page2 from './routes/Page2.jsx';

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

const root = createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);
