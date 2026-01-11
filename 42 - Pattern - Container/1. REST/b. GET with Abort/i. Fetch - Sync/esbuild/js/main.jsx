/*! European Union Public License version 1.2 !*/
/*! Copyright © 2022 Rick Beerendonk          !*/

import { createRoot } from 'react-dom/client';

import PostContainer from './PostContainer.jsx';
import './index.css';

const root = createRoot(document.getElementById('root'));
root.render(<PostContainer />);
