import { useState, useEffect } from "react";
import axios from "axios";
import "../scss/App.css";
import { Link } from "react-router-dom";

function PostDisplay() {
  // const postsData = JSON.parse(localStorage.getItem("posts"))

  const [posts, setPosts] = useState([]);

  console.log(posts);

  useEffect(() => {
  // const [{ data, loading, error }, refetch] = axios({
  //   url: "https://http://localhost:3000/api",
  //   headers: {'Authorization': `bearer ${token}`}
  // });
  
    axios
      .get("http://localhost:3000/api/posts")
      .then((posts) => {
        setPosts(posts.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="landingPage">
      {posts.length
        ? posts.map((post) => (
            <div>
              <h2>{post.postTittle}</h2>
              <p>{post.postDescription}</p>
              <Link to={`/post/${post.id}`}>Voir le post</Link>
            </div>
          ))
        : null}
    </div>
  );
}

export default PostDisplay;