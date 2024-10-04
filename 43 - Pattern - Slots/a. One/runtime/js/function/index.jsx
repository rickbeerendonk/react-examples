/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

/* global React, ReactDOM */

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

function Container({ children }) {
  return (
    <div style={styles.container}>
      The only item:
      <div style={styles.content}>{children}</div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Container>
    <em>First</em>
  </Container>
);
