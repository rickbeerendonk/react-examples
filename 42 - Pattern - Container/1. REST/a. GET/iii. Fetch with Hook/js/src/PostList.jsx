/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import Post from './Post.jsx';

function PostList({ posts }) {
  return (
    <ol>
      {posts.map(post => (
        <Post key={post.id} id={post.id} title={post.title} />
      ))}
    </ol>
  );
}

export default PostList;
