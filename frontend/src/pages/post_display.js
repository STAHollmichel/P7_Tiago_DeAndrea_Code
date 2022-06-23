import { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";
import { Link } from "react-router-dom";

import logoImage from '../components/images/icon.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



// import { userLikePost } from '../../../backend/controllers/posts';

function PostDisplay() {

  const [posts, setPosts] = useState([]);

  console.log(posts);

  const like = (postId) => {
    axios.post("http://localhost:3000/api/posts/" + postId + '/like')
    .then((result) =>{
      console.log(result)
    })
  }
  useEffect(() => {
  
    axios
      .get("http://localhost:3000/api/posts")
      .then((posts) => {
        setPosts(posts.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className='container py-4 col-lg-5'>
      {posts.length
        ? posts.map((post) => (
            <div className='card mb-3'>
              <picture>
                <img src={logoImage} className='card-img-top' alt='Post' />
              </picture>
              <div className='card-body text-center'>
                <h2>{post.postTittle}</h2>
                <p>{post.postDescription}</p>
                <div>
                <FontAwesomeIcon icon="fa-solid fa-thumbs-up" />
                  <button onClick={() => like(post.id)} className='btn btn-secondary ms-3 mb-3'>Like</button>
                  <Link to={`/post/${post.id}`}><button className='btn btn-primary ms-3 mb-3'>Voir le post</button></Link>
                </div>
              </div>
            </div>
          ))
        : null}
    </div>
  );
}

export default PostDisplay;