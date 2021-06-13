import { useState, useEffect } from 'react';

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => setPosts(data.slice(0, 10)))
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      {posts && posts.map((post) =>
        <div key={`post-${post.id}`}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      )}
    </div>
  );
}

export default Posts;