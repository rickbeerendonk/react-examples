/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import { createRoot } from 'react-dom/client';

import Sum from './Sum.jsx';

createRoot(document.getElementById('root')).render(<Sum first={2} />);
