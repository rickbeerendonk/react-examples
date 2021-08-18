/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

/* global React, ReactDOM */

class App extends React.Component {
  render() {
    return (
      <h1
        style={{
          transform: 'rotate(10deg) translate(50px, 100px)',
          msTransform: 'rotate(10deg) translate(50px, 100px)',
          WebkitTransform: 'rotate(10deg) translate(50px, 100px)'
        }}
      >
        Hello World!
      </h1>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
