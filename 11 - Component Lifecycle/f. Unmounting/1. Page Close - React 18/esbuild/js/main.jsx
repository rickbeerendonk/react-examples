/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018-2020 Rick Beerendonk          !*/

import { createRoot } from 'react-dom/client';

import Parent from './Parent.jsx';

const node = document.getElementById('root');

const root = createRoot(node);
root.render(<Parent />);

// Add this to get componentWillUnmount / useEffect-cleanup events.
window.addEventListener('beforeunload', () => root.unmount());
