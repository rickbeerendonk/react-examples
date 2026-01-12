/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { createRoot } from 'react-dom/client';

import Greeting from './Greeting.jsx';
import List from './List.jsx';
import './oblicum.css';

const root = createRoot(document.getElementById('root'));
root.render(
  <List
    items={[
      <Greeting key="0" name="Alexandra" />,
      <Greeting key="1" name="Benjamin" />,
      <Greeting key="2" name="Charlotte" />
    ]}
  ></List>
);
