/*! European Union Public License version 1.2 !*/
/*! Copyright © 2023 Rick Beerendonk          !*/

import React from 'react';
import { fetch } from 'slow-fetch';

import ErrorMessage from './ErrorMessage';
import Fetching from './Fetching';
import PostList from './PostList';

function useFetchJson(url, options, retries = 0) {
  const [json, setJson] = React.useState(undefined);
  const [error, setError] = React.useState(undefined);
  const [isFetching, setIsFetching] = React.useState(false);
  const [retried, setRetried] = React.useState(0);

  React.useEffect(
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

  return [json, error, isFetching];
}

// Container pattern:
// Container fetches data, then renders the sub-component.
function PostListContainer() {
  const [posts = [], error, isFetching] = useFetchJson('posts2.json', null, 3);

  return (
    <>
      {isFetching && <Fetching />}
      {error ? <ErrorMessage message={error} /> : <PostList posts={posts} />}
    </>
  );
}

export default PostListContainer;
