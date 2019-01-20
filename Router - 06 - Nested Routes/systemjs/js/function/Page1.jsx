/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';

import SubPage1 from './SubPage1';
import SubPage2 from './SubPage2';

function Page1({ match }) {
  return (
    <React.Fragment>
      <h2>1st page</h2>

      <ul>
        <li>
          <Link to={match.url}>Subpage 1</Link>
        </li>
        <li>
          <Link to={match.url + '/sub2'}>Subpage 2</Link>
        </li>
      </ul>

      <Switch>
        <Route path={match.url + '/sub2'} component={SubPage2} />
        <Route path={match.url} component={SubPage1} />
      </Switch>
    </React.Fragment>
  );
}

export default Page1;
