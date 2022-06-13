import axios from "axios";
import { useForm } from "react-hook-form";

function ModifyPost(props) {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => { 
        window.alert("Publication modifié!");
        console.log(data);
        axios
            .put("http://localhost:3000/api/posts/" + props.id, data)
            .then(
                (result) => {
                window.location.reload();
             })
            .catch((err) => console.log(err));
    }

    return (
        <div className="container col-lg-5 py-4">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                    <label for="InputPost1" class="form-label">Post :</label>
                    <textarea {...register("postDescription")} className="form-control" id="InputPost1" />
                </div>
                <button type="submit" value="Submit" className="btn btn-primary">Publier</button>
            </form>
        </div>
        );
    }

export default ModifyPost;