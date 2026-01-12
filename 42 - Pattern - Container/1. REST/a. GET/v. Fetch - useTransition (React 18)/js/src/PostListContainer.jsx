/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { useEffect, useState, useTransition } from 'react';
import { fetch } from './slow-fetch.js';

import ErrorMessage from './ErrorMessage.jsx';
import Fetching from './Fetching.jsx';
import PostList from './PostList.jsx';

// Container pattern:
// Container fetches data, then renders the sub-component.
function PostListContainer() {
  const [posts, setPosts] = useState(null);
  const [error, setError] = useState(null);
  const [isPending, startTransition] = useTransition();

  useEffect(
    () => {
      startTransition(() => {
        async function fetchData() {
          try {
            const response = await fetch('posts.json');
            if (!response.ok) {
              throw Error(response.statusText);
            }
            const json = await response.json();
            setPosts(json);
          } catch (error) {
            setError(error.message);
          }
        }

        fetchData();
      });
    },
    [] /* Do effect only once. Set functions of useState never change. */
  );

  if (isPending || !posts) {
    return <Fetching />;
  }

  if (error) {
    return <ErrorMessage message={error} />;
  }

  return <PostList posts={posts} />;
}

export default PostListContainer;
