/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

import React from 'react';

const styles = {
  container: {
    backgroundColor: 'lightgray',
    padding: 10
  },
  content: {
    backgroundColor: 'white',
    padding: 10
  }
};

function Container({ children = <u>Default</u> }) {
  return (
    <div style={styles.container}>
      The only item:
      <div style={styles.content}>{children}</div>
    </div>
  );
}

export default Container;
