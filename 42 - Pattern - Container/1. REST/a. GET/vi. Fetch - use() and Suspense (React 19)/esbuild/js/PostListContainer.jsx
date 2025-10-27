/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018-2025 Rick Beerendonk     !*/

import { Suspense, use } from 'react';
import { fetch } from 'slow-fetch';

import Fetching from './Fetching.jsx';
import PostList from './PostList.jsx';

async function fetchPosts() {
  const response = await fetch('posts.json');
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response.json();
}

const postsPromise = fetchPosts();

function PostListContainer() {
  // use() unwraps the promise - will suspend until resolved
  const posts = use(postsPromise);

  return (
    <Suspense fallback={<Fetching />}>
      <PostList posts={posts} />
    </Suspense>
  );
}

export default PostListContainer;
