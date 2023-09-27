/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import { createRoot } from 'react-dom/client';

import Greeting from './Greeting.jsx';

const root = createRoot(document.getElementById('root'));
root.render(
  <Greeting
    greeting={new Date().getHours() < 12 ? 'Good morning' : 'Hello'}
    name="World"
  />
);
