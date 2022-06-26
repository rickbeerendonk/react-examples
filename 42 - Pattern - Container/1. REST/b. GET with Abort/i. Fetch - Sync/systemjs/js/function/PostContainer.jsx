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
  const [isFetchingCount, setIsFetchingCount] = React.useState(0);

  React.useEffect(
    () => {
      // 1. Create an Abort Controller
      const abortController = new AbortController();

      setIsFetchingCount(c => c + 1);
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
          setError(null);
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
          setIsFetchingCount(c => c - 1);
        });

      // 4. Return the Abort Controller cleanup (for useEffect)
      return () => {
        abortController.abort();
      };
    },
    [id] /* Do effect when ID changes. */
  );

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
      {isFetchingCount ? (
        <div>
          <Fetching />
        </div>
      ) : error ? (
        <ErrorMessage message={error} />
      ) : (
        post && <Post key={post.id} title={post.title} body={post.body} />
      )}
    </React.Fragment>
  );
}

export default PostListContainer;
