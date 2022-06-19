/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

/* global React, ReactDOM */

class Greeting extends React.Component {
  render() {
    return (
      <>
        <h1>Hello World!</h1>
        What do you think about React?
        <div>It looks amazing.</div>
      </>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Greeting />);
