import { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function PostDisplay() {
  const [posts, setPosts] = useState([]);

  console.log(posts);

  const like = (postId) => {
    axios
      .post('http://localhost:3000/api/posts/' + postId + '/like')
      .then((result) => {
        console.log(result);
        getPosts();
      });
  };

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = () => {
    axios
      .get('http://localhost:3000/api/posts')
      .then((posts) => {
        setPosts(posts.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container py-4 col-lg-5">
      {posts.length
        ? posts.map((post) => {
            console.log(post.User);
            return (
              <div className="card mb-3">
                <picture>
                  <img
                    src={post.postPhoto}
                    className="card-img-top"
                    alt="Post"
                  />
                </picture>
                <div className="card-body text-center">
                  <em>
                    Author: {post.User.firstName} {post.User.lastName}
                  </em>
                  <h2>{post.postTitle}</h2>
                  <p>{post.postDescription}</p>
                  <div>
                    <FontAwesomeIcon icon="fa-solid fa-thumbs-up" />
                    <button
                      onClick={() => like(post.id)}
                      className="btn btn-secondary ms-3 mb-3"
                    >
                      Like
                    </button>
                    {post.userLike}
                    <Link to={`/post/${post.id}`}>
                      <button className="btn btn-primary ms-3 mb-3">
                        Voir le post
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })
        : null}
    </div>
  );
}

export default PostDisplay;