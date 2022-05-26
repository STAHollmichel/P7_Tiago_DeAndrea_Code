import { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";
import { Link } from "react-router-dom";

function PostDisplay() {

  const [posts, setPosts] = useState([]);

  console.log(posts);

  useEffect(() => {
  
    axios
      .get("http://localhost:3000/api/posts")
      .then((posts) => {
        setPosts(posts.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className='container'>
      {posts.length
        ? posts.map((post) => (
            <div className='card mb-3'>
              <picture>
                <img className='card-img-top'></img>
              </picture>
              <div className='card-body text-center'>
                <h2>{post.postTittle}</h2>
                <p>{post.postDescription}</p>
              </div>
              <Link to={`/post/${post.id}`}><button className='btn btn-primary mb-3'>Voir le post</button></Link>
            </div>
          ))
        : null}
    </div>
  );
}

export default PostDisplay;