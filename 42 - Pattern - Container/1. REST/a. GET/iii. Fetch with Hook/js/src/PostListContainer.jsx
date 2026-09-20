/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018-2026 Rick Beerendonk     !*/

import { useEffect, useState } from 'react';

import { fetch } from './slow-fetch.js';

import ErrorMessage from './ErrorMessage.jsx';
import Fetching from './Fetching.jsx';
import PostList from './PostList.jsx';

function useFetchJson(url, options) {
  const [json, setJson] = useState(undefined);
  const [error, setError] = useState(undefined);
  const [isFetching, setIsFetching] = useState(false);

  // Serialize options so a new object literal from the caller doesn't retrigger the effect.
  const optionsKey = options ? JSON.stringify(options) : '';

  useEffect(() => {
    const abortController = new AbortController();

    // Reset previous state when the URL changes.
    setJson(undefined);
    setError(undefined);
    setIsFetching(true);

    (async () => {
      try {
        const response = await fetch(url, {
          ...options,
          signal: abortController.signal
        });
        if (!response.ok) {
          throw Error(response.statusText);
        }
        const data = await response.json();
        setJson(data);
      } catch (error) {
        if (error.name === 'AbortError') {
          return;
        }
        setError(error.message);
      } finally {
        setIsFetching(false);
      }
    })();

    return () => abortController.abort();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url, optionsKey]);

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
