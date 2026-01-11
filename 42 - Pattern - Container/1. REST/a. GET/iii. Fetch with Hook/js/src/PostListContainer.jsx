/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { useEffect, useState } from 'react';

import { fetch } from './slow-fetch.js';

import ErrorMessage from './ErrorMessage.jsx';
import Fetching from './Fetching.jsx';
import PostList from './PostList.jsx';

function useFetchJson(url, options) {
  const [json, setJson] = useState(undefined);
  const [error, setError] = useState(undefined);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(
    /* Wrap async call so no Promise is returned */
    function () {
      (async () => {
        setIsFetching(true);
        try {
          const response = await fetch(url, options);
          if (!response.ok) {
            throw Error(response.statusText);
          }
          const json = await response.json();
          setJson(json);
        } catch (error) {
          setError(error.message);
        } finally {
          setIsFetching(false);
        }
      })();
    },
    [url, options]
  );

  return { json, error, isFetching };
}

// Container pattern:
// Container fetches data, then renders the sub-component.
function PostListContainer() {
  const { json = [], error, isFetching } = useFetchJson('posts.json');

  return (
    <>
      {isFetching && <Fetching />}
      {error ? <ErrorMessage message={error} /> : <PostList posts={json} />}
    </>
  );
}

export default PostListContainer;
