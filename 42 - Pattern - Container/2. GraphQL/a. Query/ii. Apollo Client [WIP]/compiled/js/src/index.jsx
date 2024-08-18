/*! Copyright © 2020 Rick Beerendonk !*/

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import ReactDOM from 'react-dom';

import PostListContainer from './PostListContainer';

const root = document.createElement('div');
document.body.appendChild(root);

const client = new ApolloClient({
  uri: 'http://localhost:3000',
  cache: new InMemoryCache()
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <PostListContainer />
  </ApolloProvider>,
  root
);
