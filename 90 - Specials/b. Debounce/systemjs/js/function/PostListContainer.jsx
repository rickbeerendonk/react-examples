/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React from 'react';

import { debounce } from './utils/debounce';
import ErrorMessage from './ErrorMessage';
import Fetching from './Fetching';
import PostList from './PostList';

// Container pattern:
// Container fetches data, then renders the sub-component.
function PostListContainer() {
  const [query, setQuery] = React.useState('');
  const [posts, setPosts] = React.useState([]);
  const [error, setError] = React.useState(null);
  const [isFetching, setIsFetching] = React.useState(false);

  React.useEffect(
    /* Wrap async call so no Promise is returned */
    fetchPosts,
    [query]
  );

  function fetchPosts() {
    (async () => {
      setIsFetching(true);
      try {
        const response = await fetch(
          `http://jsonplaceholder.typicode.com/posts?q=${query}`
        );
        if (!response.ok) {
          throw Error(response.statusText);
        }
        const json = await response.json();
        setPosts(json);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsFetching(false);
      }
    })();
  }

  function handleQueryChange(e) {
    console.log('handleQueryChange');
    setQuery(e.target.value);
  }

  return (
    <React.Fragment>
      <div>
        <label>
          Filter without Debounce:
          <input onChange={handleQueryChange} />
        </label>
      </div>
      <div>
        <label>
          Filter with Debounce:
          {/* Don't control the debounce input (use value) */}
          <input onChange={debounce(handleQueryChange, 500)} />
        </label>
      </div>
      <hr />
      <div>
        <u>Query:</u> {query}
      </div>
      {isFetching && <Fetching />}
      {error ? <ErrorMessage message={error} /> : <PostList posts={posts} />}
    </React.Fragment>
  );
}

export default PostListContainer;
