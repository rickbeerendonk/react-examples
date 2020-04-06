/*! European Union Public License version 1.2 !*/
/*! Copyright © 2014 Rick Beerendonk          !*/

/* global React, ReactDOM */

function Greeting(props) {
  return (
    <React.Fragment>
      <h3>Greeting:</h3>
      <div>
        {
          // Change render based on name:
          props.name ? (
            <React.Fragment>
              <u>Hello</u> {props.name}!
            </React.Fragment>
          ) : (
            <span style={{ color: 'red' }}>No name provided.</span>
          )
        }
      </div>
    </React.Fragment>
  );
}

ReactDOM.render(
  <React.Fragment>
    <Greeting name="Alexandra" />
    <Greeting />
    <Greeting name="Benjamin" />
  </React.Fragment>,
  document.getElementById('app')
);
