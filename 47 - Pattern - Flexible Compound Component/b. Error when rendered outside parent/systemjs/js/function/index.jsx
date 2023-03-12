/*! European Union Public License version 1.2 !*/
/*! Copyright © 2023 Rick Beerendonk          !*/

import React from 'react';
import ReactDOM from 'react-dom';

import GreetingEditor from './GreetingEditor';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.Fragment>
    <GreetingEditor.Text />
    <GreetingEditor.Input />
  </React.Fragment>
);
