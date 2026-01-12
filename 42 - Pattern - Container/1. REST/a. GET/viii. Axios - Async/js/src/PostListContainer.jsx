/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import axios from 'axios';
import { useEffect, useState } from 'react';

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
    /* Wrap async call so no Promise is returned */
    fetchPosts,
    [] /* Do effect only once. Set functions of useState never change.  */
  );

  function fetchPosts() {
    (async () => {
      setIsFetching(true);
      try {
        const response = await axios.get('posts.json');
        setPosts(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsFetching(false);
      }
    })();
  }

  return (
    <>
      {isFetching && <Fetching />}
      {error ? <ErrorMessage message={error} /> : <PostList posts={posts} />}
    </>
  );
}

export default PostListContainer;
