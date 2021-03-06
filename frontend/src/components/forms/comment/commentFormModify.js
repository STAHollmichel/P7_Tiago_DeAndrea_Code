import axios from "axios";
import { useForm } from "react-hook-form";

function ModifyPost(props) {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => { 
        window.alert("Commentaire modifié!");
        console.log(data);
        axios
            .put("http://localhost:3000/api/comments/" + props.id, data)
            .then(
                (result) => {
                window.location.reload();
             })
            .catch((err) => console.log(err));
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
                <label for="InputTittle1" className="form-label">Titre :</label>
                <input {...register("postTittle")} type="text" className="form-control" id="InputTittle1" />
            </div>
            <div className="mb-3">
                <label for="InputPost1" className="form-label">Post :</label>
                <textarea {...register("postDescription")} className="form-control" id="InputPost1" />
            </div>
            <button type="submit" value="Submit" className="btn btn-primary">Publier</button>
        </form>
        );
    }

export default ModifyPost;