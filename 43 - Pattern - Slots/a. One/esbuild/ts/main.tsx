/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { createRoot } from 'react-dom/client';

import Container from './Container.tsx';

const root = createRoot(document.getElementById('root'));
root.render(
  <Container>
    <em>First</em>
  </Container>
);
