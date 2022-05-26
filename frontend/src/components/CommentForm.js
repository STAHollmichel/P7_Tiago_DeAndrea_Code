import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";


function CommentForm() {
    const { register, handleSubmit } = useForm();

    const navigate = useNavigate();

    const onSubmit = (data) => {
        console.log(data);
  
        axios
            .post("http://localhost:3000/api/comments/", data)
            .then(
                (result) => {
                    navigate("/post/id")
                console.log(result);
             })
            .catch((err) => console.log(err));
    };


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div class="mb-3">
                <label for="InputComment1" class="form-label">Commentaire :</label>
                <textarea {...register("postDescription")} class="form-control" id="InputComment1" />
            </div>
            <button type="submit" action="link"value="Submit" class="btn btn-primary">Commenter</button>
        </form>
        );
    }

export default CommentForm;