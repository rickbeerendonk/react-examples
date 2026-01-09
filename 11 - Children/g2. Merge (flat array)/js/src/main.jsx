/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { createRoot } from 'react-dom/client';

import Greeting from './Greeting.jsx';
import SpecialList from './SpecialList.jsx';
import './oblicum.css';

const root = createRoot(document.getElementById('root'));
root.render(
  <SpecialList>
    <Greeting name="Alexandra" />
    <Greeting name="Benjamin" />
    <Greeting name="Charlotte" />
  </SpecialList>
);
