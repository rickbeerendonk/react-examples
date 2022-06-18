/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React from 'react';

import Post from './Post';

function PostList({ posts }) {
  return (
    <ul>
      {posts.map(post => (
        <Post key={post.id} title={post.title} />
      ))}
    </ul>
  );
}

export default PostList;
