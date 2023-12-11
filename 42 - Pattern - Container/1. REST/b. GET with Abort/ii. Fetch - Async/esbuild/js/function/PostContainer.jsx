/*! European Union Public License version 1.2 !*/
/*! Copyright © 2022 Rick Beerendonk          !*/

import { useEffect, useState } from 'react';

import { fetch } from 'slow-fetch';

import ErrorMessage from './ErrorMessage.jsx';
import Fetching from './Fetching.jsx';
import Post from './Post.jsx';

// Container pattern:
// Container fetches data, then renders the sub-component.
function PostListContainer() {
  const [id, setId] = useState(1);

  const [post, setPost] = useState(null);
  const [error, setError] = useState(null);
  const [isFetchingCount, setIsFetchingCount] = useState(0);

  useEffect(
    () => {
      // 1. Create an Abort Controller
      const abortController = new AbortController();

      (async () => {
        setIsFetchingCount(c => c + 1);
        try {
          const response = await fetch(
            `http://jsonplaceholder.typicode.com/posts/${id}`,
            {
              // 2. Pass the Signal
              signal: abortController.signal
            }
          );
          if (!response.ok) {
            throw Error(response.statusText);
          }
          const json = await response.json();
          setPost(json);
          setError(null);
        } catch (error) {
          // 3. Ignore the error thrown when Aborting the fetch
          if (error.name === 'AbortError') {
            console.log(error.message);
          } else {
            // Other errors
            setError(error.message);
          }
        } finally {
          setIsFetchingCount(c => c - 1);
        }
      })();

      // 4. Return the Abort Controller cleanup (for useEffect)
      return () => {
        abortController.abort();
      };
    },
    [id] /* Do effect when ID changes. */
  );

  return (
    <>
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
    </>
  );
}

export default PostListContainer;
