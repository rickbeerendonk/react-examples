/*! Copyright © 2020 Rick Beerendonk !*/

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import { createRoot } from 'react-dom/client';

import PostListContainer from './PostListContainer';

const rootDiv = document.createElement('div');
document.body.appendChild(rootDiv);

const client = new ApolloClient({
  uri: 'http://localhost:3000',
  cache: new InMemoryCache()
});

const root = createRoot(rootDiv);
root.render(
  <ApolloProvider client={client}>
    <PostListContainer />
  </ApolloProvider>
);
