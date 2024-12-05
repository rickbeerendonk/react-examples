/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import type { Post } from './Post.ts';
import PostComponent from './PostComponent.tsx';

interface PostListProps {
  posts: Post[];
}

function PostList({ posts }: PostListProps) {
  return (
    <ol>
      {posts.map(post => (
        <PostComponent key={post.id} id={post.id} title={post.title} />
      ))}
    </ol>
  );
}

export default PostList;
