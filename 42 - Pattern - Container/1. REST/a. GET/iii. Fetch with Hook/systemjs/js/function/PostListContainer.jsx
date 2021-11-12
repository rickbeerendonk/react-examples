/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React from 'react';
import { fetch } from 'slow-fetch';

import ErrorMessage from './ErrorMessage';
import Fetching from './Fetching';
import PostList from './PostList';

function useFetchJson(url, options) {
  const [json, setJson] = React.useState(undefined);
  const [error, setError] = React.useState(undefined);
  const [isFetching, setIsFetching] = React.useState(false);

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
          setError(error.message);
        } finally {
          setIsFetching(false);
        }
      })();
    },
    [url, options]
  );

  return [json, error, isFetching];
}

// Container pattern:
// Container fetches data, then renders the sub-component.
function PostListContainer() {
  const [posts = [], error, isFetching] = useFetchJson('posts.json');

  return (
    <>
      {isFetching && <Fetching />}
      {error ? <ErrorMessage message={error} /> : <PostList posts={posts} />}
    </>
  );
}

export default PostListContainer;
