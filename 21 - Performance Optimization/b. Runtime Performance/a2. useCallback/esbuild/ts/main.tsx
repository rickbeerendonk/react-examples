/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { createRoot } from 'react-dom/client';

import Parent from './Parent.tsx';

const root = createRoot(document.getElementById('root') as Element);
root.render(<Parent />);
