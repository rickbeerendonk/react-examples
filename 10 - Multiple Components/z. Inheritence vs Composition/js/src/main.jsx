/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { createRoot } from 'react-dom/client';
import './oblicum.css';

import Greeting from './Greeting.jsx';
import Important from './Important.jsx';
import ImportantGreeting from './ImportantGreeting.jsx';

createRoot(document.getElementById('root')).render(
  <>
    {/* Inheritance */}
    <ImportantGreeting name="World" />

    <br />

    {/* Composition */}
    <Important>
      <Greeting name="World" />
    </Important>
  </>
);
