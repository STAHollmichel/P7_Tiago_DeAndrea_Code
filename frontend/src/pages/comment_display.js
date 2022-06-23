import { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";
import { useParams } from 'react-router-dom';


function CommentDisplay(props) {

  const [comments, setComments] = useState([]);
  console.log(comments);

  const params = useParams();

  const deleteComment = (commentId) => {
    axios.delete("http://localhost:3000/api/comments/" + commentId)
    .then((result) => {
        alert("Comment Suprimé");
        window.location.reload();
    }) 
}

  useEffect(() => {
    
    axios
      .get("http://localhost:3000/api/comments/" + props.postId)
      .then((comments) => {
        setComments(comments.data.comments);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className='container container col-lg-5 py-4'>
      {comments.length
        ? comments.map((comment) => (
            <div className='card mb-3'>
              <div className='card-text p-2'>
              <p>{comment.commentDescription}</p>
              <button onClick={() => deleteComment(comment.id)} className='btn btn-danger'>Effacer</button>
              </div>
            </div>
          ))
        : null}
  </div>
);
}

export default CommentDisplay;