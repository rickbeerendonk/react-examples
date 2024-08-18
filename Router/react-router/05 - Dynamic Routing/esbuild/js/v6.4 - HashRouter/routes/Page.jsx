/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { useParams } from 'react-router-dom';

function Page() {
  const { id } = useParams();
  return <h2>Page {id}</h2>;
}

export default Page;
