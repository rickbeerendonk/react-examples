/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { createRoot } from 'react-dom/client';

import Container from './Container.jsx';
import './oblicum.css';

const root = createRoot(document.getElementById('root'));
root.render(
  <Container>
    <em>First</em>
  </Container>
);
