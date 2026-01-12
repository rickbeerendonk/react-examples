/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { createRoot } from 'react-dom/client';
import EditBox from './EditBox';
import MyButton from './MyButton';

createRoot(document.getElementById('root')).render(
  <>
    <EditBox value="World" onChange={() => {}} />
    <MyButton onClick={() => {}} />
  </>
);
