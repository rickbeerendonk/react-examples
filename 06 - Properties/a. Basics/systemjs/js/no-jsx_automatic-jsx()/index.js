/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import Runtime from 'react/jsx-runtime';
const { jsx } = Runtime;

import ReactDOM from 'react-dom';

import Greeting from './Greeting';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(jsx(Greeting, { name: 'World' }));
