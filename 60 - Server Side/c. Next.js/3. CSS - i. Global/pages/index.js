/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

import Head from 'next/head';
import MyText from './MyText.js';

function Index() {
  return (
    <>
      <Head>
        <title>Hello Title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <h1>
        Hello <MyText text="Next.js" />!
      </h1>
    </>
  );
}

export default Index;
