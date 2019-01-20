/*! European Union Public License version 1.2 !*/
/*! Copyright © 2017 Rick Beerendonk          !*/

/* global React, ReactDOM */
/* eslint react/prop-types:"off", no-console:"off" */

function Child() {
  console.log('Render Child');
  return <h2>Child</h2>;
}

const ChildMemo = React.memo(Child /* no custom comparison (2nd parameter) */);
ChildMemo.displayName = 'ChildMemo';

function Parent() {
  const [name, setName] = React.useState('');

  function nameChanged(e) {
    setName(e.target.value);
  }

  return (
    <React.Fragment>
      <h1>Parent</h1>
      <div style={{ color: 'darkgray' }}>
        Open the console and observe the number of Child renders when typing.
      </div>
      <div>
        <input autoFocus onChange={nameChanged} value={name} />
      </div>
      <ChildMemo />
    </React.Fragment>
  );
}

ReactDOM.render(<Parent />, document.getElementById('app'));
