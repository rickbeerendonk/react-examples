/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { useEffect, useState } from 'react';

import { fetch } from './slow-fetch.js';

import ErrorMessage from './ErrorMessage.jsx';
import Fetching from './Fetching.jsx';
import PostList from './PostList.jsx';

// Container pattern:
// Container fetches data, then renders the sub-component.
function PostListContainer() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(
    fetchPosts,
    [] /* Do effect only once. Set functions of useState never change. */
  );

  function fetchPosts() {
    setIsFetching(true);
    fetch('posts.json')
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .then(json => {
        setPosts(json);
      })
      .catch(error => {
        setError(error.message);
      })
      .finally(() => {
        setIsFetching(false);
      });
  }

  return (
    <>
      {isFetching && <Fetching />}
      {error ? <ErrorMessage message={error} /> : <PostList posts={posts} />}
    </>
  );
}

export default PostListContainer;
