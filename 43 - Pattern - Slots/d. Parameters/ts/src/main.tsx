/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

import { createRoot } from 'react-dom/client';

import Container from './Container.tsx';
import './oblicum.css';

const root = createRoot(document.getElementById('root')!);
root.render(
  <Container slot1={<em>First</em>} slot2={param => <b>Second: {param}</b>} />
);
