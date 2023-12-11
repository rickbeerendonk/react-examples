/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk !*/

import { useQuery, gql } from '@apollo/client';
import React from 'react';
import { hot } from 'react-hot-loader/root';

import ErrorMessage from './ErrorMessage';
import Fetching from './Fetching';
import PostList from './PostList';

function PostListContainer() {
  const { isFetching, error, data } = useQuery(gql`
    query {
      allPosts {
        id
        title
      }
    }
  `);

  return (
    <>
      {isFetching && <Fetching />}
      {error && <ErrorMessage message={error.message} />}
      {data && data.allPosts.length && <PostList posts={data.allPosts} />}
    </>
  );
}

export default hot(PostListContainer);
