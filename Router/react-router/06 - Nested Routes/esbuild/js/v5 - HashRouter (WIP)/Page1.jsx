/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';

import SubPage1 from './SubPage1';
import SubPage2 from './SubPage2';
import SubPage3 from './SubPage3';

function Page1() {
  const { path } = useRouteMatch();
  return (
    <>
      <h2>1st page</h2>

      <nav>
        <ul>
          <li>
            <Link to={path}>Subpage 1</Link>
          </li>
          <li>
            <Link to={path + '/sub2'}>Subpage 2</Link>
          </li>
          <li>
            <Link to={path + '/sub3'}>Subpage 3</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path={path + '/sub2'}>
          <SubPage2 />
        </Route>
        <Route path={path + '/sub3'}>
          <SubPage3 />
        </Route>
        <Route path={path}>
          <SubPage1 />
        </Route>
      </Switch>
    </>
  );
}

export default Page1;
