/*! European Union Public License version 1.2 !*/
/*! Copyright © 2023 Rick Beerendonk          !*/

import { useEffect, useState } from 'react';

import { fetch } from 'slow-fetch';

import ErrorMessage from './ErrorMessage.jsx';
import Fetching from './Fetching.jsx';
import PostList from './PostList.jsx';

function useFetchJson(url, options, retries = 0) {
  const [json, setJson] = useState(undefined);
  const [error, setError] = useState(undefined);
  const [isFetching, setIsFetching] = useState(false);
  const [retried, setRetried] = useState(0);

  useEffect(
    /* Wrap async call so no Promise is returned */
    function () {
      (async () => {
        // TODO: Reset retries, JSON and error when URL changes.
        setIsFetching(true);
        try {
          const response = await fetch(url, options);
          if (!response.ok) {
            throw Error(response.statusText);
          }
          const json = await response.json();
          setJson(json);
        } catch (error) {
          let msg = error.message;
          if (retried < retries) {
            msg += ` retrying... (attempt ${retried + 1})`;
          }
          setError(msg);
          if (retried < retries) {
            setRetried(r => r + 1);
          }
        } finally {
          setIsFetching(false);
        }
      })();
    },
    [url, options, retries, retried]
  );

  return { json, error, isFetching };
}

// Container pattern:
// Container fetches data, then renders the sub-component.
function PostListContainer() {
  const { json = [], error, isFetching } = useFetchJson('posts2.json', null, 3);

  return (
    <>
      {isFetching && <Fetching />}
      {error ? <ErrorMessage message={error} /> : <PostList posts={json} />}
    </>
  );
}

export default PostListContainer;
