/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

/* eslint react/prop-types:"off" */

import React from 'react';

import Post from './Post';

const PostList = ({ posts }) => (
  <ul>{posts.map(post => <Post key={post.id} title={post.title} />)}</ul>
);

export default PostList;
