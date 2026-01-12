/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import { createRoot } from 'react-dom/client';

import PostListContainer from './PostListContainer';

const rootDiv = document.createElement('div');
document.body.appendChild(rootDiv);
import './index.css';

const root = createRoot(rootDiv);
root.render(<PostListContainer />);
