/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018-2020 Rick Beerendonk     !*/

import { createRoot } from 'react-dom/client';

import Greeting from './Greeting.tsx';

const root = createRoot(document.getElementById('root')!);
root.render(<Greeting name="World" default />);
