import { useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import FileUploaderBtn from '../../buttons/fileUploaderBtn';

function ModifyPost(props) {
  const { register, handleSubmit } = useForm();

  const [file, setFile] = useState(null);

  const handleFile = (file) => {
    setFile(file);
  };

  const onSubmit = (data) => {
    window.alert('Publication modifié!');
    console.log(data);
    const formdata = new FormData();
    formdata.append('postDescription', data.postDescription);
    formdata.append('image', file);

    axios
      .put('http://localhost:3000/api/posts/' + props.id, formdata)
      .then((result) => {
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container col-lg-5 py-4">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label for="InputPost1" class="form-label">
            Post :
          </label>
          <textarea
            {...register('postDescription')}
            className="form-control"
            id="InputPost1"
          />
        </div>
        <FileUploaderBtn handleFile={handleFile} />
        <button type="submit" value="Submit" className="btn btn-primary">
          Publier
        </button>
      </form>
    </div>
  );
}

export default ModifyPost;