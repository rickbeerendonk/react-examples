/*! European Union Public License version 1.2 !*/
/*! Copyright © 2022 Rick Beerendonk          !*/

import React from 'react';
import { fetch } from 'slow-fetch';

import ErrorMessage from './ErrorMessage';
import Fetching from './Fetching';
import Post from './Post';

// Container pattern:
// Container fetches data, then renders the sub-component.
function PostListContainer() {
  const [id, setId] = React.useState(1);

  const [post, setPost] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [isFetching, setIsFetching] = React.useState(false);

  React.useEffect(fetchPost, [id] /* Do effect when ID changes. */);

  function fetchPost() {
    // 1. Creat an Abort Controller
    const abortController = new AbortController();

    setIsFetching(true);
    fetch(`http://jsonplaceholder.typicode.com/posts/${id}`, {
      // 2. Pass the Signal
      signal: abortController.signal
    })
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .then(json => {
        setPost(json);
      })
      .catch(error => {
        // 3. Ignore the error thrown when Aborting the fetch
        if (error.name === 'AbortError') {
          console.log(error.message);
        } else {
          // Other errors
          setError(error.message);
        }
      })
      .finally(() => {
        setIsFetching(false);
      });

    // 4. Return the Abort Controller cleanup (for useEffect)
    return () => {
      abortController.abort();
    };
  }

  return (
    <React.Fragment>
      <label>
        Post id:
        <input
          type="number"
          onChange={e => setId(e.target.valueAsNumber)}
          value={id}
        />
      </label>
      {isFetching && (
        <div>
          <Fetching />
        </div>
      )}
      {error && <ErrorMessage message={error} />}
      {post && <Post key={post.id} title={post.title} body={post.body} />}
    </React.Fragment>
  );
}

export default PostListContainer;
