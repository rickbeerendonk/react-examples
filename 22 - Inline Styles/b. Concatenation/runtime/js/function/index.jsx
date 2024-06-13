/*! European Union Public License version 1.2 !*/
/*! Copyright © 2017 Rick Beerendonk          !*/

/* global React, ReactDOM */

function Greeting({ style }) {
  return <h1 style={{ ...styles.header, ...style }}>Hello World!</h1>;
  /* React Native: <h1 style={[styles.header, style]}>Hello World!</h1> */
}

const styles = {
  header: {
    background: '#444',
    color: 'orchid',
    fontStyle: 'italic', // font-style in CSS
    marginTop: '75px' // margin-top in CSS
  }
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Greeting style={{ background: 'orange', color: 'blue' }} />,
  document.getElementById('root')
);
