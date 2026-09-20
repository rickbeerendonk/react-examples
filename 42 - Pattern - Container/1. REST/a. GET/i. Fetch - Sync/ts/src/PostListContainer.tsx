/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018-2026 Rick Beerendonk     !*/

import { useEffect, useState } from 'react';

import { fetch } from './slow-fetch.js';
import ErrorMessage from './ErrorMessage.tsx';
import Fetching from './Fetching.tsx';
import type { Post } from './Post.ts';
import PostList from './PostList.tsx';

// Container pattern:
// Container fetches data, then renders the sub-component.
function PostListContainer() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    setIsFetching(true);
    fetch('posts.json')
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .then((json: Post[]) => {
        setPosts(json);
      })
      .catch((error: unknown) => {
        setError(error instanceof Error ? error.message : String(error));
      })
      .finally(() => {
        setIsFetching(false);
      });
  }, []);

  return (
    <>
      {isFetching && <Fetching />}
      {error ? <ErrorMessage message={error} /> : <PostList posts={posts} />}
    </>
  );
}

export default PostListContainer;
