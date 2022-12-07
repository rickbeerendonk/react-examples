/*! European Union Public License version 1.2 !*/
/*! Copyright © 2017 Rick Beerendonk          !*/

import ReactDOM from 'react-dom/client';
import Greeting from './Greeting';

const rootElem = document.createElement('div');
document.body.appendChild(rootElem);

const root = ReactDOM.root(rootElem);
root.render(<Greeting />);
