import { useEffect, useRef, useState } from 'react';

export default function useFetchPost(id) {
  const [post, setPost] = useState({});
  const controllerRef = useRef(null);

  useEffect(() => {
    // Abort previous request if any
    if (controllerRef.current) {
      controllerRef.current.abort();
    }

    // Create new controller for this request
    controllerRef.current = new AbortController();

    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: 'GET',
      signal: controllerRef.current.signal
    })
      .then(response => response.json())
      .then(data => setPost(data))
      .catch(error => {
        // Ignore AbortError - it's expected when cleanup happens
        if (error.name !== 'AbortError') {
          throw error;
        }
        console.log(`Request for post ID ${id} was aborted`);
      });

    // Cleanup: abort request on unmount or when id changes
    return () => {
      if (controllerRef.current) {
        controllerRef.current.abort();
      }
    };
  }, [id]);

  return post;
}
