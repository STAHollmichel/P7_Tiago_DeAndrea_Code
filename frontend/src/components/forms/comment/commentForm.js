import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";


function CommentForm() {
    const { register, handleSubmit } = useForm();

    const navigate = useNavigate();

    const onSubmit = (data) => {
        console.log(data);
  
        axios
            .post("http://localhost:3000/api/comments/", {...data, postId: props.postId})
            .then(
                (result) => {
                    navigate("/post/" + props.postId)
                console.log(result);
             })
            .catch((err) => console.log(err));
    };


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
                <label for="InputComment1" className="form-label">Commentaire :</label>
                <textarea {...register("postDescription")} className="form-control" id="InputComment1" />
            </div>
            <button type="submit" action="link"value="Submit" className="btn btn-primary">Commenter</button>
        </form>
        );
    }

export default CommentForm;