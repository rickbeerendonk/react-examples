/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React from 'react';
import { fetch } from 'slow-fetch';

import ErrorMessage from './ErrorMessage';
import Fetching from './Fetching';
import { Post } from './Post';
import PostList from './PostList';

// Container pattern:
// Container fetches data, then renders the sub-component.
function PostListContainer() {
  const [posts, setPosts] = React.useState<Post[]>(null);
  const [error, setError] = React.useState(null);
  const [isPending, startTransition] = React.useTransition();

  React.useEffect(
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
