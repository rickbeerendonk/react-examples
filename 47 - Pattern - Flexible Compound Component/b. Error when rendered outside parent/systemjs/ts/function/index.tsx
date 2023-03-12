/*! European Union Public License version 1.2 !*/
/*! Copyright © 2023 Rick Beerendon           !*/

import React from 'react';
import ReactDOM from 'react-dom/client';

import GreetingEditor from './GreetingEditor';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <GreetingEditor.Text />
    <GreetingEditor.Input />
  </>
);
