import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';

import NameEditor from '../name/containers/NameEditor';
import ValueEditor from '../value/containers/ValueEditor';

function App() {
  return (
    <React.Fragment>
      <header>
        <h1 style={{textDecoration: 'underline'}}>Router &amp; Redux</h1>
      </header>
      <Switch>
        <Route path='/name' component={NameEditor} />
        <Route path='/value' component={ValueEditor} />
        <Route render={() => (
          <nav>
            <Link to="/name">Name</Link>
            <br />
            <Link to="/value">Value</Link>
          </nav>
        )} />
      </Switch>
    </React.Fragment>
  );
}

export default App;