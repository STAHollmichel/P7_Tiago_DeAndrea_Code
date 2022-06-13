import axios from 'axios';
import { useForm } from 'react-hook-form';

import FileUploaderBtn from '../../buttons/fileUploaderBtn';

function PostForm() {

    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => { 
        window.alert("Publication ajoutée!");
        console.log(data);
        axios
            .post("http://localhost:3000/api/posts/", data)
            .then((result) => {
                window.location.reload();
                console.log(result);
             })
            .catch((err) => console.log(err));
    }

    return (
        <div className='container col-lg-5 py-4'>
            <div className='card p-3 '>
                <div className='card-text'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='mb-3'>
                            <textarea {...register("postDescription")} placeholder="Que voulais-vous dire?" class="form-control bg-light pb-0 rounded-pill" id="InputPost1" />
                        </div>
                        <div className='border-top pt-3 d-flex justify-content-between'>
                            <FileUploaderBtn />
                            <button type="submit" value="Submit" className="btn btn-danger">Publier</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        );
    }

export default PostForm;