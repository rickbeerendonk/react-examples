/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018-2026 Rick Beerendonk     !*/

import { useEffect, useState } from 'react';

import { fetch } from './slow-fetch.js';
import ErrorMessage from './ErrorMessage.tsx';
import Fetching from './Fetching.tsx';
import type { Post } from './Post.tsx';
import PostList from './PostList.tsx';

// Container pattern:
// Container fetches data, then renders the sub-component.
function PostListContainer() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    // Wrap async call so no Promise is returned from the effect callback.
    (async () => {
      setIsFetching(true);
      try {
        const response = await fetch('posts.json');
        if (!response.ok) {
          throw Error(response.statusText);
        }
        const json: Post[] = await response.json();
        setPosts(json);
      } catch (error: unknown) {
        setError(error instanceof Error ? error.message : String(error));
      } finally {
        setIsFetching(false);
      }
    })();
  }, []);

  return (
    <>
      {isFetching && <Fetching />}
      {error ? <ErrorMessage message={error} /> : <PostList posts={posts} />}
    </>
  );
}

export default PostListContainer;
