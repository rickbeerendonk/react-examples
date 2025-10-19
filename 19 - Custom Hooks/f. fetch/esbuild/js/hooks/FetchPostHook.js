import { useEffect, useRef, useState } from 'react';

export default function useFetchPost(id) {
  const [post, setPost] = useState({});
  let controllerRef = useRef(new AbortController()); // { current: ... }

  useEffect(() => {
    controllerRef.current.abort();

    controllerRef.current = new AbortController();

    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: 'GET',
      signal: controllerRef.current.signal
    })
      .then(response => response.json())
      .then(data => setPost(data));
  }, [id]);

  return post;
}
