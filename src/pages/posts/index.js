// import { useState, useEffect } from 'react';
import Link from 'next/link';

function Posts({ posts }) {
  // const [posts, setPosts] = useState([]);

  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/posts')
  //   .then(response => response.json())
  //   .then(data => setPosts(data.slice(0, 10)))
  // }, []);

  return (
    <div>
      <h1>Posts</h1>
      {posts && posts.map((post) =>
        <div key={`post-${post.id}`}>
          <h3>
            <Link href={`/posts/${post.id}`}>
              <a>
                {post.title}
              </a>
            </Link>
          </h3>
          <p>{post.body}</p>
        </div>
      )}
    </div>
  );
}

export async function getStaticProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();

  // console.log('data: ', data);

  return {
    props: {
      posts: data.slice(0, 10),
    }
  }
}

export default Posts;