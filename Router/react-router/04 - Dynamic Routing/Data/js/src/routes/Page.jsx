/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { useParams } from 'react-router-dom';

function Page() {
  const params = useParams();
  return (
    <>
      <title>Page {params.id}</title>
      <h2>Page {params.id}</h2>
      <pre>{JSON.stringify(params, null, 2)}</pre>
    </>
  );
}

export default Page;
