import axios from "axios";
import { useForm } from "react-hook-form";

function ModifyPost(props) {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => { 
        window.alert("Commentaire modifié!");
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
        <form onSubmit={handleSubmit(onSubmit)}>
            <div class="mb-3">
                <label for="InputTittle1" class="form-label">Titre :</label>
                <input {...register("postTittle")} type="text" class="form-control" id="InputTittle1" />
            </div>
            <div class="mb-3">
                <label for="InputPost1" class="form-label">Post :</label>
                <textarea {...register("postDescription")} class="form-control" id="InputPost1" />
            </div>
            <button type="submit" value="Submit" class="btn btn-primary">Publier</button>
        </form>
        );
    }

export default ModifyPost;