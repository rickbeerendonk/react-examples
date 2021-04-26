/*! European Union Public License version 1.2 !*/
/*! Copyright © 2016 Rick Beerendonk          !*/

/* global React, ReactDOM */

class App extends React.Component {
  render() {
    const show = true;

    return (
      <React.Fragment>
        <h3>Conditional:</h3>
        {
          // Only render when a name is truthy:
          show && <div>Visible</div>
        }
      </React.Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
