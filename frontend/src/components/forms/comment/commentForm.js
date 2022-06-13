import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";


function CommentForm() {
    const { register, handleSubmit } = useForm();

    const navigate = useNavigate();

    const params = useParams();

    const onSubmit = (data) => {
        console.log(data);
        console.log(params)
        axios
            .post("http://localhost:3000/api/comments/", {...data, postId: params.id})
            .then(
                (result) => {
                    navigate("/post/" + params.id)
                console.log(result);
             })
            .catch((err) => console.log(err));
    };


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
                <label for="InputComment1" className="form-label">Commentaire :</label>
                <textarea {...register("commentDescription")} className="form-control" id="InputComment1" />
            </div>
            <button type="submit" value="Submit" className="btn btn-primary">Commenter</button>
        </form>
        );
    }

export default CommentForm;