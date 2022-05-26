import { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";
import { Link } from "react-router-dom";

function CommentDisplay() {

  const [comments, setComments] = useState([]);
  
  console.log(comments);

  useEffect(() => {
    
    axios
      .get("http://localhost:3000/api/comments")
      .then((comments) => {
        setComments(comments.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className='container'>
      {comments.length
        ? comments.map((comment) => (
            <div className='card mb-3'>
              <p>{comment.commentDescription}</p>
              <Link to={`/comment/${comment.id}`}><button className='btn btn-primary'>Voir le comment</button></Link> 
            </div>
          ))
        : null}
  </div>
);
}

export default CommentDisplay;