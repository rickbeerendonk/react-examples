/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { createRoot } from 'react-dom/client';
import EditBox from './EditBox.tsx';
import MyButton from './MyButton.tsx';

createRoot(document.getElementById('root')!).render(
  <>
    <EditBox value="World" onChange={() => {}} />
    <MyButton onClick={() => {}} />
  </>
);
