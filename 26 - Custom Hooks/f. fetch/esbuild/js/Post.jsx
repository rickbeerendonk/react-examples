/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { useState } from 'react';
import useFetchPost from './hooks/FetchPostHook.js';

function Post() {
  const [id, setId] = useState(1);
  const post = useFetchPost(id);

  function handleChange(e) {
    setId(Number(e.target.value));
  }

  return (
    <>
      <input type="number" onChange={handleChange} value={id} />
      <h1>
        {post.id}. {post.title}
      </h1>
    </>
  );
}

export default Post;
