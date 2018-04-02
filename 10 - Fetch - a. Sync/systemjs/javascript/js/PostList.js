/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

/* eslint react/prop-types:"off" */

import React from 'react';

import Post from 'Post';

const PostList = ({posts}) =>  (
  React.createElement('ul', null,
  posts.map(function (post, i) {
    return React.createElement(Post, { key: i, title: post.title })
  })
));

export default PostList;