import { useState, useEffect } from "react";
import axios from "axios";
import "../scss/App.css";
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
    <div className="landingPage">
      {comments.length
        ? comments.map((comment) => (
            <div>
              <p>{comment.commentDescription}</p>
              <Link to={`/comment/${comment.id}`}>Voir le post</Link>
            </div>
          ))
        : null}
  </div>
);
}

export default CommentDisplay;