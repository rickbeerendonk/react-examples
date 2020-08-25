/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import React from 'react';

import ErrorMessage from './ErrorMessage';
import Fetching from './Fetching';
import PostList from './PostList';

// Container pattern:
// Container fetches data, then renders the sub-component.
function PostListContainer() {
  const [posts, setPosts] = React.useState([]);
  const [error, setError] = React.useState(null);
  const [isFetching, setIsFetching] = React.useState(false);

  React.useEffect(fetchPosts, [posts.length]);

  function fetchPosts() {
    if (posts.length === 0) {
      (async () => {
        setIsFetching(true);
        try {
          const query = '{ allPosts { id title } }';
          const response = await fetch(
            `http://localhost:3000?query=${encodeURIComponent(query)}`
          );
          if (!response.ok) {
            throw Error(response.statusText);
          }
          const json = await response.json();
          setPosts(json.data.allPosts);
        } catch (error) {
          setError(error.message);
        } finally {
          setIsFetching(false);
        }
      })();
    }
  }

  return (
    <React.Fragment>
      {isFetching && <Fetching />}
      {error ? <ErrorMessage message={error} /> : <PostList posts={posts} />}
    </React.Fragment>
  );
}

export default PostListContainer;
