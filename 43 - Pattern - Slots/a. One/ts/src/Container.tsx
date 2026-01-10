/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import type { ReactNode } from 'react';

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

interface ContainerProps {
  children: ReactNode;
}

function Container({ children }: ContainerProps) {
  return (
    <div style={styles.container}>
      The only item:
      <div style={styles.content}>{children}</div>
    </div>
  );
}

export default Container;
