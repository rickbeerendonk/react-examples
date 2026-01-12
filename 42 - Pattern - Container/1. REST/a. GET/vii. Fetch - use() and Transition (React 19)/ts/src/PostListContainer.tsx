/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018-2025 Rick Beerendonk     !*/

import { use } from 'react';

import { fetch } from './slow-fetch.js';
import { Post } from './Post.tsx';
import PostList from './PostList.tsx';

async function fetchPosts(): Promise<Post[]> {
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

  return <PostList posts={posts} />;
}

export default PostListContainer;
