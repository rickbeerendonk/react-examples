/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import { createRoot } from 'react-dom/client';

import Check from './Check.jsx';

createRoot(document.getElementById('root')).render(<Check checked={true} />);
