/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { createElement } from 'react';

import Post from './Post.js';

function PostList({ posts }) {
  return createElement(
    'ul',
    null,
    posts.map(function (post, i) {
      return createElement(Post, { key: i, title: post.title });
    })
  );
}

export default PostList;
