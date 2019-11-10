/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React from 'react';

import Post from 'Post';

function PostList({ posts }) {
  return React.createElement(
    'ul',
    null,
    posts.map(function(post, i) {
      return React.createElement(Post, { key: i, title: post.title });
    })
  );
}

export default PostList;
