/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { Post } from './Post.tsx';
import PostComponent from './PostComponent.tsx';

interface PostListProps {
  posts: Post[];
}

function PostList({ posts }: PostListProps) {
  return (
    <ul>
      {posts.map(post => (
        <PostComponent key={post.id} title={post.title} />
      ))}
    </ul>
  );
}

export default PostList;
