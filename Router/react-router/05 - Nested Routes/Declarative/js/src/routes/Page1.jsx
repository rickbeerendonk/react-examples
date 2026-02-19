/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018-2024 Rick Beerendonk !*/

import { Link, Route, Routes } from 'react-router-dom';

import SubPage1 from './subroutes/SubPage1.jsx';
import SubPage2 from './subroutes/SubPage2.jsx';
import SubPage3 from './subroutes/SubPage3.jsx';

function Page1() {
  return (
    <>
      <h2>1st page</h2>

      <nav>
        <ul>
          <li>
            <Link to="/page1">Subpage 1</Link>
          </li>
          <li>
            <Link to="/page1/sub2">Subpage 2</Link>
          </li>
          <li>
            <Link to="/page1/sub3">Subpage 3</Link>
          </li>
          <li>
            <Link to="../">[One level up]</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="" element={<SubPage1 />} />
        <Route path="sub2" element={<SubPage2 />} />
        <Route path="sub3" element={<SubPage3 />} />
      </Routes>
    </>
  );
}

export default Page1;
