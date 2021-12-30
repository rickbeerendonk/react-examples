/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

import MyText from './MyText.js';

import styles from './index.module.css';

function Index() {
  return (
    <h1 className={styles.hello}>
      Hello <MyText text="Next.js" />!
    </h1>
  );
}

export default Index;
